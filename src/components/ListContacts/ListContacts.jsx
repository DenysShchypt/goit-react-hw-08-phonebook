import { useDispatch, useSelector } from 'react-redux';
import { ItemContact, ListContact } from './ListContacts.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Text } from '@chakra-ui/react';


export const ListContacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  return (

    <ListContact>
      {visibleContacts.map(contact => (
        <ItemContact  key={contact.id}>
          <Text as='b' fontSize='22px'>{contact.name}: {contact.number}{' '}</Text>
          <Button marginLeft='auto' colorScheme='teal' variant='outline'
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </ItemContact>
      ))}
    </ListContact>

  );
};
