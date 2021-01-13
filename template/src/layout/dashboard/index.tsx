import { useEffect, useRef } from "react";
import { useErrorBoundary } from "use-error-boundary";
import Loading from "../../components/Loading";
import { useUserState } from "../../features/auth/providers";
import Footer from "../Footer";
import Header from "../Header";
import { ContainerWrapper, ContentWrapper, ErrorWrapper, FooterWrapper, HeaderWrapper, MenuWrapper } from "./styles";

const DashboardLayout: React.FC<{}> = ({ children }) => {

    const { loading, error } = useUserState();
    const errorRef: { current: HTMLDivElement | null } = useRef(null);

    const { ErrorBoundary, didCatch, error: catchedError } = useErrorBoundary()

    useEffect(() => {
        if (didCatch && (catchedError.message || catchedError.code)) {
            errorRef.current && errorRef.current.removeAttribute('hidden');
            setTimeout(() => {
                errorRef.current && errorRef.current.setAttribute('hidden', 'true');
            }, 3000)
        }
    }, [error])
    return (
        didCatch ? (
            <ErrorWrapper>
                <p>An error has been catched: {catchedError.message}</p>
            </ErrorWrapper>
        ) :
            <ErrorBoundary>
            <ContainerWrapper>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
        <ContentWrapper>
                        {!loading ? children : <Loading />}
        </ContentWrapper>
            <MenuWrapper>
                Menu
            </MenuWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </ContainerWrapper>
            </ErrorBoundary>
    )
}

export default DashboardLayout;