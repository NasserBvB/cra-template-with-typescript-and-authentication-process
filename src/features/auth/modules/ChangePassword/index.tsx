import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { CustomBox } from "../../../../components/CustomBox";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomField } from "../../../../components/Field";
import { IChangePassword } from "../../../../interfaces";
import { changePassword } from "../../actions";
import { useDispatchUser } from "../../providers";

const ChangePassword = () => {
    const { dispatch } = useDispatchUser();

    const handleSubmit = async ({ oldPassword, newPassword, validatePassword }: IChangePassword, { setSubmitting, }: FormikHelpers<IChangePassword>) => {
        const status = await changePassword(dispatch, { oldPassword, newPassword, validatePassword })

    }

    const handleCancel = () => { }
    return (


        <Formik
            initialValues={{
                oldPassword: '',
                newPassword: '',
                validatePassword: ''
            }}
            onSubmit={handleSubmit}
        >
            {
                ({ handleChange, values: { oldPassword, newPassword, validatePassword }, handleSubmit }) => {
                    return (
                        <Form>
                            <CustomBox maxHeight={400}>
                                <h4 style={{ textAlign: "center" }}>Changer votre mot de passe</h4>
                                <CustomField field="oldPassword" value={oldPassword} handleChange={handleChange} label="MDP actuel" />
                                <CustomField field="newPassword" value={newPassword} handleChange={handleChange} label="nouveau mdp" />
                                <CustomField field="validatePassword" value={validatePassword} handleChange={handleChange} label="confirmer mdp" />
                                <CustomButton handleSubmit={handleSubmit} label="Valider" />
                                <Link to="/home">
                                    <CustomButton handleSubmit={handleCancel} label="Annuler" />
                                </Link>
                            </CustomBox>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default ChangePassword;