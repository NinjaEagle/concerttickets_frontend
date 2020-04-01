import React, { Component } from 'react';

class Profile extends Component {
    state  = {
        userName: '';
    }

    const locationData = {
        "data": [
            {
                "id": 38,
                "city": null,
                "state": "New York",
                "stateCode": "NY",
                "latitude": 40.713,
                "longitude": -74.006,
                "link": "https://edmtrain.com/new-york"
            }
        ],
        "success": true
    }


    render() {
        return <div>
            <h1>Hi!</h1>
        </div>;
    }
}

export default Profile;
