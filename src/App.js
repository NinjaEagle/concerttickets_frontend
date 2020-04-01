import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import ConcertsList from './components/Concerts';
import EditConcert from './components/EditConcert';
import CreateConcert from './components/CreateConcert';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Signup from './components/Signup';
// import { GoogleLogin } from 'react-google-login';
import * as firebase from 'firebase';
import firebaseConfig from './firebase.config';
// import config from './config.json';
import { createBrowserHistory } from 'history';

firebase.initializeApp(firebaseConfig);
export const AuthContext = React.createContext(null);
export default function App() {
    // state = {
    //     isAuthenticated: false,
    //     user: null,
    //     token: ''
    // };
    const [isLoggedIn, setLoggedIn] = useState(false);

    function readSession() {
        const user = window.sessionStorage.getItem(
            `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
        );
        if (user) setLoggedIn(true);
    }
    useEffect(() => {
        readSession();
    }, []);

    // logout = () => {
    //     this.setState({ isAuthenticated: false, token: '', user: null });
    // };
    // googleResponse = response => {
    //     console.log(response);
    //     const tokenBlob = new Blob(
    //         [JSON.stringify({ access_token: response.accessToken }, null, 2)],
    //         { type: 'application/json' }
    //     );
    //     const options = {
    //         method: 'POST',
    //         body: tokenBlob,
    //         mode: 'cors',
    //         cache: 'default'
    //     };
    //     fetch('http://localhost:8080/api/v1/auth/google', options).then(r => {
    //         const token = r.headers.get('x-auth-token');
    //         r.json().then(user => {
    //             if (token) {
    //                 this.setState({ isAuthenticated: true, user, token });
    //             }
    //         });
    //     });
    // };

    // onFailure = error => {
    //     console.log(error);
    //     alert(error);
    // };
    // let content = !!this.state.isAuthenticated ? (
    //     <div>
    //         <p>Authenticated</p>
    //         <div>{this.state.user.email}</div>
    //         <Router>
    //             <Navbar />
    //             <br />
    //             <Route path="/" exact component={ConcertsList} />
    //             <Route path="/edit/:id" component={EditConcert} />
    //             <Route path="/create" component={CreateConcert} />
    //             <Route path="/user" component={CreateUser} />
    //             <Route path="/login" component={Login} />
    //         </Router>
    //         <div>
    //             <button onClick={this.logout} className="button">
    //                 Log out
    //             </button>
    //         </div>
    //     </div>
    // ) : (
    //     <div>
    //         <GoogleLogin
    //             clientId={config.GOOGLE_CLIENT_ID}
    //             buttonText="Login Here"
    //             onSuccess={this.googleResponse}
    //             onFailure={this.onFailure}
    //             cookiePolicy={'single_host_origin'}
    //         />
    //     </div>
    // );
    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            Is logged in? {JSON.stringify(isLoggedIn)}
            <div className="App">
                <Router>
                    <Navbar />
                    <br />
                    <Route path="/" exact component={ConcertsList} />
                    <Route path="/edit/:id" component={EditConcert} />
                    <Route path="/create" component={CreateConcert} />
                    <Route path="/user" component={CreateUser} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Router>
                {/* <div>
                    <button onClick={this.logout} className="button">
                        Log out
                    </button>
                </div> */}
            </div>
        </AuthContext.Provider>
    );
}
