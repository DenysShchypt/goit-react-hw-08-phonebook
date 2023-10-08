import styled from "styled-components";

export const ListContact = styled.ul`
 list-style: none;
 `
export const ItemContact = styled.li`
display:flex;
text-align:center;
align-items:center;
width:400px;
padding:6px 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: ${p => p.theme.spacing(2)};
border: 1px solid ${p => p.theme.colors.black};
font-weight: 500;
font-size: 16px;
line-height: 1;
letter-spacing: 0.02em;
&:not(:last-child){
margin-bottom: 10px;
};
 `
export const DeleteContact = styled.button`
display: block;
width: 100px;
padding: 6px 10px;
margin-left: auto;
background:${p => p.theme.colors.grey};
box-shadow: 0px ${p => p.theme.spacing(2)} ${p => p.theme.spacing(2)} rgba(0, 0, 0, 0.15);
border-radius: ${p => p.theme.spacing(2)};
border: none;
font-weight: 400;
font-size: 14px;
&:hover{
background:${p => p.theme.colors.blue};
color:${p => p.theme.colors.white};
};
 `
