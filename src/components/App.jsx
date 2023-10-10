import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ListContacts/ListContacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
componentDidMount(){
  const contactsSave = localStorage.getItem('contacts');
  if(contactsSave!==null){
    this.setState({
      contacts:JSON.parse(contactsSave),
    })
  }


}
componentDidUpdate(prevState){
  if(prevState.contacts!==this.state.contacts){
    localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
  }
}




  changeFilter = (key, value) => {
    this.setState({ [key]: value });
  };

  handleFilterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      if (filter.trim() === '') {
        return contacts;
      }
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  addListContacts = addContact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...addContact, id: nanoid() }].filter(
        (item, i, arr) => arr.findIndex(it => it.name === item.name) === i
      ),
    }));

    if (this.state.contacts.some(contact => contact.name === addContact.name)) {
      return alert(`${addContact.name} is already in contacts`);
    }
  };

  removeContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Phonebook title="Phonebook">
          <ContactForm addListContacts={this.addListContacts} />
        </Phonebook>
        <Contacts valueFilter={filter} onChangeFilter={this.changeFilter}>
          <ListContacts
            nameContact={this.handleFilterContact()}
            removeContact={this.removeContact}
          />
        </Contacts>
      </>
    );
  }
}
export default App;
console.log()
