import styled from "styled-components"

const ButtonWrapper = styled.button`
    border: none;
    background: rgb(34,124,16);
    background: linear-gradient(180deg, rgba(34,124,16,1) 6%, rgba(0,255,222,1) 100%);
    padding: 10px;
    min-width: 100px;
    max-width: 120px;
    border-radius: 10%;
    &:focus, &:hover {
        outline: none;
        box-shadow: 0px 0px 2px green;
    }
`


export const CustomButton = ({ handleSubmit, label, disbaled, handleClick, className }: { handleSubmit?: any, label: string, disbaled: boolean, handleClick?: any , className?: string}) => {
    return <ButtonWrapper className={className} onSubmit={handleSubmit} type="submit" disabled={disbaled} onClick={handleClick} >{label}</ButtonWrapper>
}