import { useEffect, useRef } from "react";
import Loading from "../../components/Loading";
import { useUserState } from "../../features/auth/providers";
import { ContainerWrapper, ContentWrapper, ErrorWrapper, FooterWrapper, HeaderWrapper, MenuWrapper } from "./styles";

const DashboardLayout: React.FC<{}> = ({ children }) => {

    const { loading, error } = useUserState();
    const errorRef: { current: HTMLDivElement | null } = useRef(null);

    useEffect(() => {
        if (error && (error.message || error.code)) {
            errorRef.current && errorRef.current.removeAttribute('hidden');
            setTimeout(() => {
                errorRef.current && errorRef.current.setAttribute('hidden', 'true');
            }, 3000)
        }
    }, [error])
    return <ContainerWrapper>
        <HeaderWrapper>Header</HeaderWrapper>
        <ContentWrapper>
            {!loading ? children : <Loading />}
            <div ref={errorRef} hidden style={{ marginTop: "auto" }}>
                <ErrorWrapper>
                    {error && error.message}
                </ErrorWrapper>
            </div>
        </ContentWrapper>
        <MenuWrapper>Menu</MenuWrapper>
        <FooterWrapper>Footer</FooterWrapper>
    </ContainerWrapper>
}

export default DashboardLayout;