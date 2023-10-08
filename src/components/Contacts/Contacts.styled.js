import styled from "styled-components";

export const SectionContacts = styled.div`
margin-left: auto;
margin-right: auto;
width:500px;
border-radius: ${p=>p.theme.spacing(2)};
border: 1px solid ${p=>p.theme.colors.black};
 `
export const TitleContacts = styled.h2`
text-align:center;
font-weight: 700;
 `
export const FilterTitleContacts = styled.label`
display:block;
text-align:center;
margin-bottom:${p=>p.theme.spacing(5)};
font-weight: 500;
 `
export const FilterContacts = styled.input`
display:block;
margin-left: auto;
margin-right: auto;
border: 2px solid ${p=>p.theme.colors.black};
 `
