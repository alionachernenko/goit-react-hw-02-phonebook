// import { Component } from 'react';
import PropTypes from 'prop-types';
import {RiContactsFill} from 'react-icons/ri';

import { Info, Data, Delete} from './Contact.styled';

export const Contact = ({id, name, phone, onRemove}) => {
    return(
        <Info>
            <Data><RiContactsFill/>{name}: {phone}</Data>
            <Delete onClick={() => onRemove(id)}>Delete</Delete>
        </Info>
    )
}


Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
}