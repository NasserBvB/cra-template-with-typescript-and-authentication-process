import React, { useEffect, useRef } from "react";
import Loading from "../../components/Loading";
import { useUserState } from "../../features/auth/providers";
import { ErrorWrapper } from "../dashboard/styles";
import { ContainerWrapper, ContentWrapper, FooterWrapper, HeaderWrapper } from "./styles";

const MainLayout: React.FC<{}> = ({ children }) => {
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
    return (
        <ContainerWrapper>
            <HeaderWrapper />
            <ContentWrapper>
                {(!loading ? children : <Loading />)}
                <div ref={errorRef} hidden style={{ marginTop: "auto" }}>
                    <ErrorWrapper>
                        {error && error.message}
                    </ErrorWrapper>
                </div>
            </ContentWrapper>
            <FooterWrapper />
        </ContainerWrapper>
    )
}

export default MainLayout;