import { useUserState } from "../auth/providers";

export default function Home() {
    const { currentUser } = useUserState();
    return <h1> Hello {currentUser?.login}</h1>
}