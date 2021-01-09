import { Form, Formik, FormikHelpers } from "formik"
import React from "react"
import { Link } from "react-router-dom"
import { CustomBox } from "../../../../components/CustomBox"
import { CustomButton } from "../../../../components/CustomButton"
import { CustomField } from "../../../../components/Field"
import { IForgottenPassword } from "../../../../interfaces"
import { forgottenPassword } from "../../actions"
import { useDispatchUser } from "../../providers"

export const ForgottenPassword = () => {
    const { dispatch } = useDispatchUser();

    const handleSubmit = async ({ email }: IForgottenPassword, { setSubmitting, }: FormikHelpers<{ email: string }>) => {
        const status = await forgottenPassword(dispatch, { email })

    }
    return (


        <Formik
            initialValues={{
                email: '',
            }}
            onSubmit={handleSubmit}
        >
            {
                ({ handleChange, values: { email }, handleSubmit }) => {
                    return (
                        <Form>
                            <CustomBox maxHeight={200}>
                                <h4 style={{ textAlign: "center" }}>Pour recuperer votre compte saisir l'email de recuperation</h4>
                                <CustomField field="email" value={email} handleChange={handleChange} label="" />
                                <CustomButton handleSubmit={handleSubmit} label="Valider" />
                                <Link to="/login">Se connecter ?</Link>
                            </CustomBox>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}