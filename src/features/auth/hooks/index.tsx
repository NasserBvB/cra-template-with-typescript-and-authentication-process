import { useState } from "react";
import { IForm } from "../../../interfaces";

export const useForm = (intialValue: IForm) => {
    const [values, setValues] = useState(intialValue);

    const handleValues = (e: any) => {
        const { target: { name, value } } = e;
        setValues({ ...values, [name]: value })
    }

    return [values, handleValues]
}