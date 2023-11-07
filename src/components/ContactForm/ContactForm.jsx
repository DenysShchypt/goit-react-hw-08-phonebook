import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  AddContact,
  ErrorMes,
  FieldContact,
  FormTitleContacts,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('This field is required'),
  phone: Yup.string().matches(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,'It`s wrong phone!')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(value, actions) => {
        if (listContacts.some(item => item.name === value.name)) {
          alert(`${value.name} is already in contacts`);
        } else {
          dispatch(addContact(value));
        }
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
            <FieldContact type="tel" name="phone" required />
            <ErrorMes name="phone" component="div" />
          </FormTitleContacts>
        </div>

        <AddContact type="submit">Add contact</AddContact>
      </Form>
    </Formik>
  );
};

export default ContactForm;
