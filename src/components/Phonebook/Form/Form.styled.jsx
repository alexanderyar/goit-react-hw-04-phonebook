import styled from 'styled-components'
import { Form, Field } from 'formik';


export const ButtonStyled = styled.button`
display:block;
margin-left:auto;
margin-right:auto;

padding-left: 15px; 
padding-right: 15px;
background-color: violet;
margin-top: 25px;
`
export const FormStyled = styled(Form)`
border: 3px dashed black;
padding: 10px;
`

export const Input = styled(Field)`
color:green;
margin-right:15px;`