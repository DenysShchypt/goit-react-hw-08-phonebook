import { FilterContacts, FilterTitleContacts, SectionContacts, TitleContacts } from "./Contacts.styled"

export const Contacts = ({children,valueFilter,onChangeFilter}) => {
  return (
    <SectionContacts>
    <TitleContacts>Contacts</TitleContacts>
    <FilterTitleContacts >Find contacts by name
    </FilterTitleContacts>
    <FilterContacts type="text" value={valueFilter} onChange={e=>onChangeFilter(e.target.value)} />
    {children}
    </SectionContacts>
  )
}
