import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    grid-area: logo;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "image navigation";
    max-width: 100px;
    max-height: 100%;
    align-content: end;
    cursor: pointer;
    padding: 5px;
    gap: 7px;
    grid-auto-flow: dense;
`
const ImageWrapper = styled.img`
    border-radius: 50%;
    border: 1px solid #666;
    height: 30px;
    width: 30px;
    padding: 3px;
`

const TextWrapper = styled.div`
    display: grid;
    grid-area: navigation;
    grid-template-areas: "username username" "profil logout";
    gap: 4px;
    align-items: center;
`
export default function Logo({ nom, prenom, src, handleClick, className }: { nom: string, prenom: string, src: string, handleClick?: any, className?: string }) {
    return (
        <Wrapper className={className}>
            <ImageWrapper src="logo192.png" alt={nom} className="image" />
            <TextWrapper className="navigation">
                <p className="username">{nom} {prenom}</p>
                <p className="profil"><Link to="/profil" >Details</Link></p>
                <p className="logout"><Link to="#" onClick={handleClick}> Logout </Link></p>
            </TextWrapper>
        </Wrapper>
    )
}