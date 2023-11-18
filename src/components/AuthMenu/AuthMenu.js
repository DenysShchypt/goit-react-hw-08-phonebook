import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export const AuthMenu = () => {
  return (
    <Stack direction="row" marginRight='10' marginTop='5' gap='5'>
      <ChakraLink as={ReactRouterLink} to="/register">
        <Button colorScheme='teal' variant='outline'>
          Register
        </Button>
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/login">
        <Button colorScheme='teal' variant='outline'>
          Log In
        </Button>
      </ChakraLink>
    </Stack>
  )
}
