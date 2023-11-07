import { Phonebook } from './Phonebook/Phonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ListContacts/ListContacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Phonebook title="Phonebook">
        <ContactForm />
      </Phonebook>
      <Contacts>
        {isLoading && !error && <b>Request in progress...</b>}
        <ListContacts />
      </Contacts>
    </>
  );
};

export default App;
