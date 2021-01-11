import styled from "styled-components"
import { ICustomBoxProps } from "../../interfaces"

const BoxWrapper = styled.div`
    background-color: #6666; 
    display: grid;
    grid-tempalate-columns: 1fr;
    justify-content: center;
    border: 1px solid #666;
    -webkit-box-shadow: 13px 11px 11px 0px rgba(153,148,153,1);
    -moz-box-shadow: 13px 11px 11px 0px rgba(153,148,153,1);
    box-shadow: 13px 11px 11px 0px rgba(153,148,153,1);
    border-radius: 0% 15% 0% 15%;
    padding: 90px;
    min-height: ${props => props.theme.maxHeight}px;
    max-width: 90%;
    min-width: 500px;
    margin: 20px;
`

export const CustomBox = ({ children, maxHeight }: ICustomBoxProps) => {
    return <BoxWrapper theme={{ maxHeight }} >
        {children}
    </BoxWrapper>
}