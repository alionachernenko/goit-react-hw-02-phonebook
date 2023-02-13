import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Add} from './ContactForm.styled';

import PropTypes from 'prop-types';

export class ContactForm extends Component {

  static propTypes = {
    onHandleSubmit: PropTypes.func,
  }

    state = {
        name: '',
        phone: ''
    }

  onInput = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value,
      id: nanoid(),
    })
  }

  onContactFormSubmit = (e) => {
    const {onHandleSubmit, contacts} = this.props

    e.preventDefault()

    if (contacts.some(({name}) => name === this.state.name)) { 
      alert(`${this.state.name} is already in contacts`)
      return
    }

    onHandleSubmit(this.state)
    this.resetForm()
  }

  resetForm = () => {
    this.setState({
      name: '',
      phone: ''
    })
  }    
    render() {
        const {name, phone} = this.state
        return(
            <Form onSubmit={this.onContactFormSubmit}>
              <label htmlFor="nameInput">Name</label>
              <Input
                value={name}
                onChange={this.onInput}
                id="nameInput"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <label htmlFor="numberInput">Number</label>
                  <Input
                  onChange={this.onInput}
                  id='numberInput'
                  value={phone}
                  type="tel"
                  name="phone"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              <Add type='submit'>Add contact</Add>
            </Form>
        )
      }
}