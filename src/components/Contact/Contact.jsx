import { Component } from 'react';
import PropTypes from 'prop-types';
import {RiContactsFill} from 'react-icons/ri';

import { Info, Data, Delete} from './Contact.styled';

export class Contact extends Component{

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        onRemove: PropTypes.func.isRequired
    }

 render() {
    const {id, name, phone, onRemove} = this.props
    return(
        <Info>
            <Data><RiContactsFill/>{name}: {phone}</Data>
            <Delete onClick={() => onRemove(id)}>Delete</Delete>
        </Info>
    )
 }
}