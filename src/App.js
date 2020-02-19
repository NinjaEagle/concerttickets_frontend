import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ConcertsList from './components/Concerts';
import EditConcert from './components/EditConcert';
import CreateConcert from './components/CreateConcert';
import CreateUser from './components/CreateUser';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <br />
                <Route path="/" exact component={ConcertsList} />
                <Route path="/edit/:id" component={EditConcert} />
                <Route path="/create" component={CreateConcert} />
                <Route path="/user" component={CreateUser} />
            </div>
        </Router>
    );
}

export default App;
