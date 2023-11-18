import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const handleInputChange = e => setInput(e.target.value);
  const isError = input === '';
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      LogIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box w="50%" p={4} marginLeft="auto" marginRight="auto" paddingTop="40px">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl isInvalid={isError}>
          <FormLabel>
            Email
            <Input
              type="email"
              name="email"
              onChange={handleInputChange}
              required
              borderRadius="full"
              focusBorderColor="black"
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormLabel>
        </FormControl>
        <FormControl isInvalid={isError}>
          <FormLabel>
            Password
            <Input
              type="password"
              name="password"
              onChange={handleInputChange}
              required
              borderRadius="full"
              focusBorderColor="black"
            />
            {!isError ? (
              <FormHelperText>
                Enter the password you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </FormLabel>
        </FormControl>
        <Button
          marginTop="3"
          colorScheme="teal"
          variant="outline"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Box>
  );
};
