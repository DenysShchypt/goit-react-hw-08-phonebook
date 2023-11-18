import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {Button, Stack } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink} from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Stack direction="row" marginLeft='30px' paddingTop='5px' gap='5'>

        <ChakraLink as={ReactRouterLink} to="/">
        <Button  colorScheme='teal' variant='outline'>
          Home
          </Button>
        </ChakraLink>

      {isLoggedIn && <ChakraLink as={ReactRouterLink} to="/contacts">
      <Button  colorScheme='teal' variant='outline'>
      Contacts
      </Button>
        </ChakraLink>}
    </Stack>
  );
};
