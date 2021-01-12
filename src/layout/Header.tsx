import styled from "styled-components";
import Logo from "../components/Logo";
import { logout } from "../features/auth/actions";
import { useDispatchUser, useUserState } from "../features/auth/providers";

const Wrapper = styled.header`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: "div1 div1 div1 div1 div1 div1 div1 div1 div1 div1 div1 logo";
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(8, 1fr);
        grid-template-areas: "div1 div1 div1 div1 div1 div1 div1 logo";
    }
    align-items: center;
    padding: 16px;
`



const Header = () => {

    const { currentUser } = useUserState()
    const { dispatch } = useDispatchUser();
    const handleClick = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        logout(dispatch);
    }

return <Wrapper>
    <Logo className="logo" src="/////" nom={(currentUser && currentUser.nom) || ""} prenom={(currentUser && currentUser.prenom) || ""} handleClick={handleClick} />
    <div className="div1"></div>
    </Wrapper>
}
export default Header;