import styled from "styled-components";

export const ListContact = styled.ul`
 list-style: none;
 display:flex;
 flex-wrap:wrap;
 gap: 20px;
 justify-content:center;
 margin-top:30px;
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
margin-bottom: 10px;
 `