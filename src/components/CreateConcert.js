import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import '../css/concert.scss';
import { addConcert } from '../actions/index';
import { connect } from 'react-redux';

// moment.js date picker

function mapDispatchToProps(dispatch) {
    return {
        addConcert: concert => dispatch(addConcert(concert))
    };
}
class Form extends Component {
    state = {
        username: '',
        artist: '',
        time: '',
        date: new Date(),
        location: '',
        users: []
    };
    componentDidMount() {
        axios
            .get('http://localhost:8080/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, artist, time, date, location } = this.state;
        // const concert = {
        //     name: this.state.name,
        //     artist: this.state.artist,
        //     time: this.state.time,
        //     date: this.state.date,
        //     location: this.state.location
        // };
        // console.log(concert);
        this.props.addConcert({ name, artist, time, date, location });

        axios
            .post('http://localhost:5000/concerts/add', {
                name,
                artist,
                time,
                date,
                location
            })
            .then(res => console.log(res.data));
        window.location = '/';

        this.setState({
            username: '',
            artist: '',
            time: '',
            date: new Date(),
            location: '',
            users: []
        });
    };

    render() {
        return (
            <div className="new-concert">
                <h1>Make a New Concert</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            ref="userNamenput"
                            required
                            className="form-control"
                            value={this.state.name}
                            id="name"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Artist: </label>
                        <input
                            ref="userNamenput"
                            required
                            className="form-control"
                            value={this.state.artist}
                            id="artist"
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Time: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.time}
                            id="time"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                value={this.state.date}
                                id="date"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.location}
                            id="location"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create a Concert"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const CreateConcert = connect(null, mapDispatchToProps)(Form);
export default CreateConcert;
