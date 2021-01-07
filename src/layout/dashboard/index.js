import { ContainerWrapper, ContentWrapper, FooterWrapper, HeaderWrapper, MenuWrapper } from "../dashboard/styles";

const DashboardLayout: React.FC<{}> = ({ children }) => {
    return <ContainerWrapper>
        <HeaderWrapper />
        <ContentWrapper>{children}</ContentWrapper>
        <MenuWrapper />
        <FooterWrapper />
    </ContainerWrapper>
}

export default DashboardLayout;