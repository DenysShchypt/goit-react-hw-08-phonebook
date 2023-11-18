import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('This name is required'),
  number: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'It`s wrong phone!'
    )
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(value, actions) => {
        if (listContacts.some(item => item.name.trim() === value.name.trim())) {
          alert(`${value.name} is already in contacts`);
        } else {
          dispatch(addContact(value));
        }
        actions.resetForm();
      }}
    >
      {props => (
        <Box
          w="50%"
          marginLeft="auto"
          marginRight="auto"
          paddingTop="40px"
        >
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    {...field}
                    type="text"
                    name="name"
                    borderRadius="full"
                    focusBorderColor="black"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="number">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.number && form.touched.number}
                >
                  <FormLabel>Number</FormLabel>
                  <Input
                    {...field}
                    type="tel"
                    name="number"
                    borderRadius="full"
                    focusBorderColor="black"
                  />
                  <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              marginTop="3"
              colorScheme="teal"
              variant="outline"
              type="submit"
            >
              Add contact
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default ContactForm;
