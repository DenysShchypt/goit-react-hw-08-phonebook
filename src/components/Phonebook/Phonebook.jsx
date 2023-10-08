import { SectionPhonebook, TitlePhonebook } from './Phonebook.styled';

export const Phonebook = ({ title, children }) => {
  return (
    <SectionPhonebook>
      <TitlePhonebook>{title}</TitlePhonebook>
      {children}
    </SectionPhonebook>
  );
};
