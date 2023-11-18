import { Suspense } from 'react'
import { AppBar } from 'components/AppBar/AppBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react';
import { FallingLines } from  'react-loader-spinner'

export default function Layout() {
    
    return (
        <Box maxWidth='1200px'
        margin='0 auto'
        bg='#ffdf00'>
            <AppBar />
            <Suspense fallback={<FallingLines
  color="black"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>}>
                <Outlet />
            </Suspense>
        </Box>
    )
}
