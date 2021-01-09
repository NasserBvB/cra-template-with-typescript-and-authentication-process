import styled from "styled-components"
import { ISignIn } from "../../interfaces"

const FieldWrapper = styled.div`
display: grid;
grid-template-columns: reapeat(3, 1r);
grid-template-areas: "label ff ff" "input hh hh";
`

const LabelWrapper = styled.label`
grid-area: label;
`

const InputWrapper = styled.input`
    grid-area: input;
    padding: grey;
    border: 0px;
    font-size: 12px;
    min-height: 25px;
    border-radius: 0% 10% 0% 10%;
    &:focus, &:hover {
        outline: none;
        box-shadow: 0px 0px 2px green;
    }
`

export const CustomField = ({ handleChange, label, field, value, type = 'text' }: ISignIn) => {
    return (
        <FieldWrapper>
            <LabelWrapper defaultValue="Nasser" htmlFor={field} >{label}</LabelWrapper>
            <InputWrapper name={field} value={value} onChange={handleChange} type={type}/>
        </FieldWrapper>
    )
}