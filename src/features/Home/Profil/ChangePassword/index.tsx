import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomField } from "../../../../components/Field";
import { IChangePassword } from "../../../../interfaces";
import { useDispatchUser, useUserState } from "../../../auth/providers";
import { changePassword } from "../../actions";

const ContentFormWrapper = styled.div`
    border: 2px solid green;
    border-radius: 10% 10% 10% 10%;
    background: rgb(27,195,190);
    background: linear-gradient(180deg, rgba(27,195,190,1) 0%, rgba(27,195,75,1) 56%);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: "input1 input1 div1 div1" "input2 input2 input3 input3" "div2  div2 button2 button1";
    gap: 20px;
    padding: 30px;
    width: 100%;
    align-items: center;
`

const ChangePassword = ({ modifying }: { modifying?: boolean }) => {
    const { dispatch } = useDispatchUser();
    const { currentUser } = useUserState()

    const handleSubmit = async ({ oldPassword, newPassword, validatePassword }: IChangePassword, { setSubmitting, }: FormikHelpers<IChangePassword>) => {
        const status = await changePassword(dispatch, { oldPassword, newPassword, id: currentUser?.id })

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
                            <ContentFormWrapper>
                                <CustomField className="input1" modifying={modifying} type="password" field="oldPassword" value={oldPassword} handleChange={handleChange} label="mdp actuel" />
                                <div className="div1"></div>
                                <CustomField className="input2" modifying={modifying} type="password" field="newPassword" value={newPassword} handleChange={handleChange} label="nouveau mdp" />
                                <CustomField className="input3" type="password" modifying={modifying} field="validatePassword" value={validatePassword} handleChange={handleChange} label="confirmer mdp" />
                                <div className="div2"></div>
                                <CustomButton className="button1" handleSubmit={handleSubmit} label="Valider" disbaled={!modifying || newPassword !== validatePassword} />
                                <Link to="/home" className="button2">
                                </Link>
                            </ContentFormWrapper>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default ChangePassword;