import { useDispatch, useSelector } from 'react-redux';
import { DeleteContact, ItemContact, ListContact } from './ListContacts.styled';
import { contacts, filter } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

const getContacts = (contactsName, contactsFilter) => {
  return contactsName.filter(contact => {
    if (contactsFilter.trim() === '') {
      return contact;
    }
    return contact.name.toLowerCase().includes(contactsFilter.toLowerCase());
  });
};

export const ListContacts = () => {
  const contactsName = useSelector(contacts);
  const contactsFilter = useSelector(filter);
  const dispatch = useDispatch();

  const visibleContacts = getContacts(contactsName, contactsFilter);
  return (
    <ListContact>
      {visibleContacts.map(contact => (
        <ItemContact key={contact.id}>
          {contact.name}: {contact.phone}{' '}
          <DeleteContact
            type="button"
            onClick={() => dispatch(removeContact(contact.id))}
          >
            Delete
          </DeleteContact>
        </ItemContact>
      ))}
    </ListContact>
  );
};
