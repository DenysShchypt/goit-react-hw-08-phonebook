import { Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <Flex >
            {user&&<Text marginRight='10px' fontSize='3xl'>{user.name}</Text>}
            <Button marginRight='30px' colorScheme='teal' variant='outline' type='button' onClick={() => dispatch(LogOut())}>Logout</Button>
        </Flex>
    )
}
