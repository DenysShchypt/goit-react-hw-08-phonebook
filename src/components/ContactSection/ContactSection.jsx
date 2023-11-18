import { useDispatch } from 'react-redux';
import { statusFilter } from 'redux/filterSlice';
import { Box, FormLabel, Heading, Input} from '@chakra-ui/react';
import { ListContacts } from 'components/ListContacts/ListContacts';

export const ContactSection = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box w="60%" marginLeft="auto" marginRight="auto" paddingTop="30px">
        <Heading fontSize="40px" textAlign="center">
          Contacts
        </Heading>
        <FormLabel>Find contacts by name</FormLabel>
        <Input
          focusBorderColor="black"
          borderRadius="full"
          type="text"
          onChange={e => dispatch(statusFilter(e.target.value))}
        />
      </Box>
      <ListContacts/>
    </>
  );
};
