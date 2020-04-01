import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function ConcertsList(props) {
    console.log(props);
    return 'hi';
    // <tr>
    //     <td>{props.concert.name}</td>
    //     <td>{props.concert.artist}</td>
    //     <td>{props.concert.time}</td>
    //     <td>{props.concert.date.substring(0, 10)}</td>
    //     <td>{props.concert.location}</td>
    //     <td>
    //         <Link to={'/edit/' + props.concert._id}>edit</Link> |{' '}
    //         <a
    //             href="#"
    //             onClick={() => {
    //                 props.deleteConcert(props.concert._id);
    //             }}
    //         >
    //             delete
    //         </a>
    //     </td>
    // </tr>
}

function Table(props) {
    let concertList = concertData => {
        return concertData.map(currentConcert => {
            return 'hiss';
            // <Concert
            //     concert={currentConcert}
            //     deleteConcert={this.deleteConcert}
            //     key={currentConcert._id}
            // />
        });
    };
    return (
        <div>
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
                {/* <tbody>{this.concertList()}</tbody> */}
            </table>
        </div>
    );
}
