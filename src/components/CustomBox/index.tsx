import styled from "styled-components"

const BoxWrapper = styled.div`
    background-color: #6666; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #666;
    -webkit-box-shadow: 13px 11px 11px 0px rgba(153,148,153,1);
    -moz-box-shadow: 13px 11px 11px 0px rgba(153,148,153,1);
    box-shadow: 13px 11px 11px 0px rgba(153,148,153,1);
    border-radius: 0% 15% 0% 15%;
    padding: 60px;
    min-height: 250px;
`

export const CustomBox = ({ children }: { children: any }) => {
    return <BoxWrapper>
        {children}
    </BoxWrapper>
}