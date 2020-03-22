import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
class EditConcert extends Component {
    state = {
        username: '',
        date: new Date(),
        artist: '',
        time: '',
        location: '',
        users: []
    };
    componentDidMount() {
        axios
            .get('http://localhost:8080/concerts' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    artist: response.data.artist,
                    time: response.data.time,
                    location: response.data.location,
                    date: new Date(response.data.date)
                });
            })
            .catch(function(error) {
                console.log(error);
            });

        axios
            .get('http://localhost:8080/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username)
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        });
    };

    onChangeTime = e => {
        this.setState({
            time: e.target.value
        });
    };

    onChangeLocation = e => {
        this.setState({
            location: e.target.value
        });
    };

    onChangeDate = date => {
        this.setState({
            date: date
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const concert = {
            username: this.state.username,
            time: this.state.time,
            location: this.state.location,
            date: this.state.date
        };

        console.log(concert);

        axios
            .post(
                'http://localhost:8080/concerts/update/' +
                    this.props.match.params.id,
                concert
            )
            .then(res => console.log(res.data));

        window.location = '/';
    };
    render() {
        console.log(this.state);
        return (
            <div>
                <div>
                    <h3>Edit Concert</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username: </label>
                            <select
                                ref="userInput"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            >
                                {this.state.users.map(function(user) {
                                    return (
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    );
                                })}
                            </select>
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
                            <label>Location:</label>
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
                                value="Edit Concert Details"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditConcert;
