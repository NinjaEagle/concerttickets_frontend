import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Concert = props => (
    <tr>
        <td>{props.concert.name}</td>
        <td>{props.concert.artist}</td>
        <td>{props.concert.time}</td>
        <td>{props.concert.date.substring(0, 10)}</td>
        <td>{props.concert.location}</td>
        <td>
            <Link to={'/edit/' + props.concert._id}>edit</Link> |{' '}
            <a
                href="#"
                onClick={() => {
                    props.deleteConcert(props.concert._id);
                }}
            >
                delete
            </a>
        </td>
    </tr>
);

let mapStateToProps = state => {
    return { concerts: state.concerts };
};
class allConcerts extends Component {
    state = {
        concerts: []
    };

    componentDidMount() {
        axios
            .get('http://localhost:8080/concerts/')
            .then(response => {
                this.setState({ concerts: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    concertList() {
        return this.state.concerts.map(currentConcert => {
            return (
                <Concert
                    concert={currentConcert}
                    deleteConcert={this.deleteConcert}
                    key={currentConcert._id}
                />
            );
        });
    }

    deleteConcert = id => {
        axios
            .delete('http://localhost:8080/concerts/' + id)
            .then(res => console.log(res.data));
        this.setState({
            concerts: this.state.concerts.filter(el => el._id !== id)
        });
    };

    render() {
        return (
            <div>
                <div>
                    <h1>Nearby Concerts</h1>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Artist</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>{this.concertList()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const Concerts = connect(mapStateToProps)(allConcerts);
export default Concerts;
