import { useUserState } from "../auth/providers";
import Profil from "./Profil";

export default function Home() {
    const { currentUser } = useUserState();
    return <Profil />
}