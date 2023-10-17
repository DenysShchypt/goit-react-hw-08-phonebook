import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ListContacts/ListContacts';

const initialValueLocalStorage = () => {
  const contactsSave = localStorage.getItem('contacts');
  if (contactsSave !== null) {
    return JSON.parse(contactsSave);
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(initialValueLocalStorage);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = value => {
    setFilter(value);
  };

  const handleFilterContact = () => {
    return contacts.filter(contact => {
      if (filter.trim() === '') {
        return contacts;
      }
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const addListContacts = addContact => {
    setContacts(prev =>
      [...prev, { ...addContact, id: nanoid() }].filter(
        (item, i, arr) => arr.findIndex(it => it.name === item.name) === i
      )
    );
    if (contacts.some(contact => contact.name === addContact.name)) {
      return alert(`${addContact.name} is already in contacts`);
    }
  };
  const removeContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <Phonebook title="Phonebook">
        <ContactForm addListContacts={addListContacts} />
      </Phonebook>
      <Contacts valueFilter={filter} onChangeFilter={changeFilter}>
        <ListContacts
          nameContact={handleFilterContact()}
          removeContact={removeContact}
        />
      </Contacts>
    </>
  );
};

export default App;
