import styled from 'styled-components'


export const ContainerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 60px auto 60px;
    min-height: 100vh;
    grid-gap: 6px;
    grid-template-areas: 
        "h h h h h h h h h h h h h h"
        "c c c c c c c c c c c c c c"
        "f f f f f f f f f f f f f f";
`

export const ContentWrapper = styled.div`
    background-color: #0000;
    grid-area: c;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`



export const HeaderWrapper = styled.div`
    background-color: aqua;
    grid-area: h;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterWrapper = styled.div`
    background-color: coral;
    grid-area: f;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ErrorWrapper = styled.div`
    background-color: red;
    border: 1px solid #6666;
    border-radius: 5%;
    display: flex;
    jusitify-content: center;
    align-items: center;
    margin-bottom: auto;
    padding: 16px;
    color: white;
`