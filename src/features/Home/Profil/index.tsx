import { CustomBox } from "../../../components/CustomBox";
import { useUserState } from "../../auth/providers";
import User from "./User";

export default function Profil() {
    const { currentUser } = useUserState()
    return (
        <CustomBox maxHeight={600}>
            <User />
        </CustomBox>
    )
}