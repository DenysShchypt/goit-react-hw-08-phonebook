import { DeleteContact, ItemContact, ListContact } from './ListContacts.styled';

export const ListContacts = ({ nameContact, removeContact }) => {
  return (
    <ListContact>
      {nameContact.map(contact => (
        <ItemContact key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <DeleteContact
            type="button"
            onClick={() => removeContact(contact.id)}
          >
            Delete
          </DeleteContact>
        </ItemContact>
      ))}
    </ListContact>
  );
};
