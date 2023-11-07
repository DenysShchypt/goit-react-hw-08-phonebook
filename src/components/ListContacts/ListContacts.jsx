import { useDispatch, useSelector } from 'react-redux';
import { DeleteContact, ItemContact, ListContact } from './ListContacts.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ListContacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ListContact>
      {visibleContacts.map(contact => (
        <ItemContact key={contact.id}>
          {contact.name}: {contact.phone}{' '}
          <DeleteContact
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteContact>
        </ItemContact>
      ))}
    </ListContact>
  );
};
