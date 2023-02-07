import { Component } from 'react';
import PropTypes from 'prop-types';

import { Contact } from 'components';
import { List } from './ContactList.styled';


export class ContactList extends Component {
    static propTypes = {
        contactsList: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired
        })),
        removeContact: PropTypes.func
    }

    render () {
        const {contactsList, removeContact} = this.props

        return (
            <List>
                {contactsList.map(({id, name, phone})=> (
                    <Contact key={id} id={id} name={name} phone={phone} onRemove={removeContact}/>
                ))}
            </List>
        )
    }
}