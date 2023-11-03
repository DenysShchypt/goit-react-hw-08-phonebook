import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  AddContact,
  ErrorMes,
  FieldContact,
  FormTitleContacts,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('This field is required'),
  number: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
});

export const ContactForm = ({ addListContacts }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(value, actions) => {
        dispatch(addContact(value.name, value.number));
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <FormTitleContacts>
            Name
            <FieldContact type="text" name="name" required />
            <ErrorMes name="name" component="div" />
          </FormTitleContacts>
        </div>
        <div>
          <FormTitleContacts>
            Number
            <FieldContact type="tel" name="number" required />
            <ErrorMes name="number" component="div" />
          </FormTitleContacts>
        </div>

        <AddContact type="submit">Add contact</AddContact>
      </Form>
    </Formik>
  );
};

export default ContactForm;
