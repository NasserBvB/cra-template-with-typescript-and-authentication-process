import { ContainerWrapper, ContentWrapper, FooterWrapper, HeaderWrapper } from "./styles";

const MainLayout: React.FC<{}> = ({ children }) => {
    return <ContainerWrapper>
        <HeaderWrapper />
        <ContentWrapper>{children}</ContentWrapper>
        <FooterWrapper />
    </ContainerWrapper>
}

export default MainLayout;