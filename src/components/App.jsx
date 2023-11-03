import { Phonebook } from './Phonebook/Phonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ListContacts/ListContacts';

export const App = () => {
  return (
    <>
      <Phonebook title="Phonebook">
        <ContactForm />
      </Phonebook>
      <Contacts>
        <ListContacts />
      </Contacts>
    </>
  );
};

export default App;
