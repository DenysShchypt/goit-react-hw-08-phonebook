import { Heading } from "@chakra-ui/react";

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
export default function Home(){

    return(
      <div style={styles.container}>
          <Heading as='h2' size='3xl' noOfLines={1}>
              Welcome to Contacts list!
          </Heading>
      </div>
  )

}

