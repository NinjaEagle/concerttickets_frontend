import React, { Component } from 'react';
import '../css/filter.scss';

class Filter extends Component {
    state = {
        open: false,
        state: ''
    };

    toggle = prevState => {
        this.setState(prevState => {
            return { open: !prevState.open };
        });
    };
    handleDrop = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        this.props.filterState(e.target.value);
    };

    render() {
        let states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
        let stateDropdown = states.map(state => {
            return (
                <option value={state} name={state}>
                    {state}
                </option>
            );
        });

        return (
            <div className="filter-list">
                <div>
                    <p>Ages 18+</p>
                    <div class="ui toggle checkbox">
                        <input type="checkbox" name="public" />
                    </div>
                </div>
                <div>
                    <p>State:</p>
                </div>
                <div>
                    <p>Artist Search:</p>
                </div>
                <div>
                    <p>Dates Selected: </p>
                </div>
                <div>
                    <p>State</p>
                    <select
                        onChange={this.handleDrop}
                        class="ui search dropdown"
                    >
                        State:{stateDropdown}
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;
