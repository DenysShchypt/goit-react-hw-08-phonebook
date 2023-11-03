import { useDispatch } from 'react-redux';
import {
  FilterContacts,
  FilterTitleContacts,
  SectionContacts,
  TitleContacts,
} from './Contacts.styled';
import { statusFilter } from 'redux/filterSlice';

export const Contacts = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <SectionContacts>
      <TitleContacts>Contacts</TitleContacts>
      <FilterTitleContacts>Find contacts by name</FilterTitleContacts>
      <FilterContacts
        type="text"
        onChange={e => dispatch(statusFilter(e.target.value))}
      />
      {children}
    </SectionContacts>
  );
};
