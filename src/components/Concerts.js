import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from './Filter';
import config from '../config.json';
import { isCompositeComponent } from 'react-dom/test-utils';
import ConcertsList from '../components/ConcertsList';

let mapStateToProps = state => {
    return { concerts: state.concerts };
};
class allConcerts extends Component {
    state = {
        concerts: [],
        state: ''
    };

    chosenParams = () => {};

    // displayPage = () => {
    //     //prevents pages from repeating
    //     if (createdPagesAlready) return;
    //     if (pages.length > 10) {
    //         createPageButtons('<');
    //     }
    //     for (var i in pages) {
    //         createPageButtons(Number(i) + Number(1));
    //         if (i > 8) {
    //             createPageButtons('>');
    //             break;
    //         }
    //     }
    // };
    componentDidMount() {
        // axios
        //     .get('http://localhost:8080/concerts/')
        //     .then(response => {
        //         this.setState({ concerts: response.data });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    getStateId = term => {
        console.log(term);
        let queryURL = term;
        let stateURL =
            'https://edmtrain.com/api/locations?state=' + queryURL + '';
        // fetch state events
        fetch(
            'https://edmtrain.com/api/locations?state=' +
                queryURL +
                '&client=' +
                config.EDMTRAIN_CLIENT_KEY
        )
            .then(res => res.json())
            .then(locationData => this.stateConcerts(locationData));
        // this.stateConcerts(locationData))
    };

    stateConcerts = locationData => {
        let locationId = locationData.data[0].id;
        fetch(
            'https://edmtrain.com/api/events?locationIds=' +
                locationId +
                '&client=' +
                config.EDMTRAIN_CLIENT_KEY
        )
            .then(res => res.json())
            .then(data => this.setState({ concerts: data }));
    };

    deleteConcert = id => {
        axios
            .delete('http://localhost:8080/concerts/' + id)
            .then(res => console.log(res.data));
        this.setState({
            concerts: this.state.concerts.filter(el => el._id !== id)
        });
    };

    filterState = term => {
        this.setState({ state: term });
        this.getStateId(term);
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <div>
                    <h1>Concerts Near You</h1>
                    <Filter filterState={this.filterState} />
                    <ConcertsList concertData={this.state.concerts} />
                </div>
            </div>
        );
    }
}

const Concerts = connect(mapStateToProps)(allConcerts);
export default Concerts;
