import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { concerts: state.concerts };
};

const ConnectedList = ({ concerts }) => (
    <ul>
        {concerts.map(el => (
            <li key={el.id}>{el.name}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
