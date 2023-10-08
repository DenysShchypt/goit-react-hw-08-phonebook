import styled from "styled-components";
import { Field,ErrorMessage } from 'formik';

export const FormTitleContacts = styled.label`
display:block;
text-align:center;
margin-bottom:${p=>p.theme.spacing(5)};
font-weight: 500;
 `
export const FieldContact = styled(Field)`
display:block;
margin-top:5px;
margin-left: auto;
margin-right: auto;
border: 2px solid ${p=>p.theme.colors.black};

 `
export const ErrorMes = styled(ErrorMessage)`
color: ${p=>p.theme.colors.error}
 `
export const AddContact = styled.button`
display: block;
width: 150px;
padding: 6px 10px;
margin-top:25px;
margin-right:auto;
margin-left: auto;
background:${p=>p.theme.colors.grey};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 4px;
border: none;
font-weight: 500;
font-size: 16px;
&:hover{
background:${p=>p.theme.colors.blue};
color:${p=>p.theme.colors.white};
};
 `
