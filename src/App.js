import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ConcertsList from './components/Concerts';
import EditConcert from './components/EditConcert';
import CreateConcert from './components/CreateConcert';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import io from 'socket.io-client';
import OAuth from './OAuth';
import Loading from './Loading';
import { API_URL } from './config';
const socket = io(API_URL);

const providers = ['twitter', 'google', 'facebook', 'github'];
export default class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        console.log(API_URL);
        fetch(`${API_URL}/wake-up`).then(res => {
            if (res.ok) {
                this.setState({ loading: false });
            }
        });
    }

    render() {
        console.log(this.state);

        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <br />
                    <Route path="/" exact component={ConcertsList} />
                    <Route path="/edit/:id" component={EditConcert} />
                    <Route path="/create" component={CreateConcert} />
                    <Route path="/user" component={CreateUser} />
                    <Route path="/login" component={Login} />
                </Router>
            </div>
        );
    }
}
