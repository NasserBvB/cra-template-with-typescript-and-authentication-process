import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 20px;
    align-items: center;
    padding: 16px;
`



const Footer = () => {
    return <Wrapper>
        <Link to="#"> Home</Link>
        <Link to="#"> Home</Link>
        <Link to="#"> Home</Link>
    </Wrapper>
}
export default Footer;

