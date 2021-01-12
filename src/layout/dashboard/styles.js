import styled from 'styled-components'

export const ContainerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100px auto 100px;
    min-height: 100vh;
    grid-gap: 6px;
    grid-template-areas: 
        "m h h h h h h h h h h h h h"
        "m c c c c c c c c c c c c c"
        "f f f f f f f f f f f f f f";
    @media screen and (max-width: 800px) {
        grid-template-areas: 
        "m m h h h h h h h h h h h h"
        "c c c c c c c c c c c c c c"
        "f f f f f f f f f f f f f f";
    }
`

export const ContentWrapper = styled.div`
    background-color: #0000;
    grid-area: c;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const HeaderWrapper = styled.div`
    background-color: #c3bebe;
    grid-area: h;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuWrapper = styled.div`
    background-color: #c9c2c2;
    grid-area: m;
    display: flex;
    justify-content: center;
    align-items: center; 
    max-width: 110px;
    min-width: 40px;
    @media screen and (max-width: 600px) {
        cursor: pointer;
        border-radius: 5%;
    }
`

export const FooterWrapper = styled.div`
    background-color: #f2eded;
    grid-area: f;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ErrorWrapper = styled.div`
    background-color: red;
    border: 1px solid #6666;
    border-radius: 5%;
    box-shadow: orange;
    display: flex;
    jusitify-content: center;
    align-items: center;
    margin-bottom: auto;
    padding: 6px;
    color: white;
`