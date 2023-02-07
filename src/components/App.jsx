import { Component } from "react";
import { ContactForm, ContactList, Filter } from 'components';
import { Phonebook } from "./App.styled";

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  addContact = (contact) => {
    const {contacts} = this.state

    if (contacts.some(({name}) => name === contact.name)) { 
      alert(`${contact.name} is already in contacts`) 
      return
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  removeContact = (contactId) => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(({id}) => id !== contactId)
    }))
  }

  onFilterInput = (e) => {
    this.setState({
      filter: e.target.value,
    })
  }
  
  render() {
    const {contacts, filter} = this.state
    const {addContact, onFilterInput, removeContact} = this
    let filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase().trim()))

    return(
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={addContact}/>
        
        <h2>Contacts</h2>
        <Filter value={filter} onInputHandler={onFilterInput}/>
        <ContactList contactsList={filteredContacts} removeContact={removeContact}/>
      </Phonebook>
    )
}};
