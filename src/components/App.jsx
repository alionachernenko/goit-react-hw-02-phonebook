import { Component } from "react";
import { ContactForm, ContactList, Filter } from 'components';
import { Phonebook } from "./App.styled";

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
      if(prevState.contacts !== this.state.contacts) {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
      }
    }

  
  addContact = (contact) => {
    
    this.setState((prevState) =>{
      console.log(prevState.contacts === this.state.contacts) 
      return {
      contacts: [...prevState.contacts, contact] //new array
      }}) 
    
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
        <ContactForm onHandleSubmit={addContact} contacts={contacts}/>
        
        <h2>Contacts</h2>
        <Filter value={filter} onInputHandler={onFilterInput} />
        <ContactList contactsList={filteredContacts} removeContact={removeContact}/>
      </Phonebook>
    )
}};
