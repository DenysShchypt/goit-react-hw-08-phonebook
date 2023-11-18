import { Flex, Heading, Spacer } from '@chakra-ui/react';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
      <Header>
        <Flex alignItems='flex-end' flexWrap='wrap'>
          <Navigation />
          <Spacer />
          <Heading as='h1' size='2xl'>
            Phone book</Heading>
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </Flex>
      </Header>
  )
}
