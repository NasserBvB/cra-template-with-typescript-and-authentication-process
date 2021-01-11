import styled from "styled-components";
import Logo from "../components/Logo";
import { useUserState } from "../features/auth/providers";

const Wrapper = styled.header`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: "l l l l l l l l l l l logo";
    align-items: center;
    padding: 16px;
`



const Header = () => {
    const { currentUser } = useUserState()
    return <Wrapper>
        <Logo src="/////" userName={(currentUser && currentUser.nom) || ""} />
    </Wrapper>
}
export default Header;