import styled from "styled-components"

const ButtonWrapper = styled.button`
    border: none;
    background: rgb(34,124,16);
    background: linear-gradient(180deg, rgba(34,124,16,1) 6%, rgba(0,255,222,1) 100%);
    padding: 10px;
    min-width: 100px;
    border-radius: 10%;
    &:focus, &:hover {
        outline: none;
        box-shadow: 0px 0px 2px green;
    }
`


export const CustomButton = ({ handleSubmit, label }: { handleSubmit: any, label: string }) => {
    return <ButtonWrapper onSubmit={handleSubmit} type="submit">{label}</ButtonWrapper>
}