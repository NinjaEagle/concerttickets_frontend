import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import '../css/concert.scss';

class CreateConcert extends Component {
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
    onChangeName = e => {
        this.setState({ name: e.target.value });
    };
    onChangeArtist = e => {
        this.setState({ artist: e.target.value });
    };
    onChangeTime = e => {
        this.setState({ time: e.target.value });
    };
    onChangeDate = date => {
        this.setState({ date: date });
    };
    onChangeLocation = e => {
        this.setState({ location: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const concert = {
            name: this.state.name,
            artist: this.state.artist,
            time: this.state.time,
            date: this.state.date,
            location: this.state.location
        };
        console.log(concert);
        axios
            .post('http://localhost:5000/concerts/add', concert)
            .then(res => console.log(res.data));
        window.location = '/';
    };

    render() {
        return (
            <div className="new-concert">
                <h1>Make a New Concert</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            ref="userNamenput"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Artist: </label>
                        <input
                            ref="userNamenput"
                            required
                            className="form-control"
                            value={this.state.artist}
                            onChange={this.onChangeArtist}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Time: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.time}
                            onChange={this.onChangeTime}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.location}
                            onChange={this.onChangeLocation}
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

export default CreateConcert;
