import styled from "styled-components";
import Logo from "../components/Logo";
import { logout } from "../features/auth/actions";
import { useDispatchUser, useUserState } from "../features/auth/providers";

const Wrapper = styled.header`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: "l l l l l l l l l l l logo";
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
    <Logo src="/////" userName={(currentUser && currentUser.nom) || ""} handleClick={handleClick} />
    </Wrapper>
}
export default Header;