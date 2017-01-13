import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.handleInput = this.handleInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleInput(event) {
        this.setState({ term: event.target.value });
    }

    submitForm(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className='input-group'>
                <input
                    placeholder='Get a five day forecast in your favourite cities'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.handleInput}>
                </input>
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
