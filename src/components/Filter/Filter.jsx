import { Component } from 'react';
import { Input } from './Filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        onInputHandler: PropTypes.func.isRequired
    }

    render() {
        const { value, onInputHandler } =  this.props
        return (
            <Input>
            <label htmlFor='filterInput'>Find contact by name</label>
            <input id='filterInput' type='text' name='filter' value={value} onChange={onInputHandler}/>
            </Input>
        )
    }
}