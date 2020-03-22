import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                    Concert Buddies
                </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">
                                Concerts
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">
                                Create Concert Log
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">
                                Create User
                            </Link>
                        </li>
                        <li className="login-nav">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default navbar;
