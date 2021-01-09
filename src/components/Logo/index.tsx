import styled from "styled-components"

const Wrapper = styled.div`
    grid-area: logo;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    max-width: 110px;
    align-items: center;
    cursor: pointer;
`
const ImageWrapper = styled.img`
    border-radius: 50%;
    border: 1px solid #666;
    height: 30px;
    width: 30px;
    padding: 3px;
`
export default function Logo({ userName, src }: { userName: string, src: string }) {
    return (
        <Wrapper>
            <ImageWrapper src="logo192.png" alt={userName} />
            <h3>{userName}</h3>
        </Wrapper>
    )
}