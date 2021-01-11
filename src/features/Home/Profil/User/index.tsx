import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomField } from "../../../../components/Field";
import { useUserState } from "../../../auth/providers";
import ChangePassword from "../ChangePassword";

const HeadUserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 50px;
`
const ContentUserWrapper = styled.div`
    border: 2px solid green;
    border-radius: 10% 10% 10% 10%;
    background: rgb(27,195,190);
    background: linear-gradient(180deg, rgba(27,195,190,1) 0%, rgba(27,195,75,1) 56%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 30px;
    width: 100%;
    align-items: center;
`

const ContentFormWrapper = styled.div`
    border: 2px solid green;
    border-radius: 10% 10% 10% 10%;
    background: rgb(27,195,190);
    background: linear-gradient(180deg, rgba(27,195,190,1) 0%, rgba(27,195,75,1) 56%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: "title title" "input1 input2" "input3 input4" "div1 button1" ;
    gap: 20px;
    padding: 30px;
    width: 100%;
    align-items: center;
`


export default function User() {
    const { currentUser } = useUserState()
    const [modifying, setModifying] = useState(false);
    const [modifyingPassword, setModifyingPassword] = useState(false);
    const handleSubmit = () => { }
    const handleCancel = () => { }

    const handleClose = (event: React.FormEvent<HTMLButtonElement>) => {
        setModifying(false);
    }
    const handleOpen = (event: React.FormEvent<HTMLButtonElement>) => {
        setModifying(true);
    }
    const handleClosePassword = (event: React.FormEvent<HTMLButtonElement>) => {
        setModifyingPassword(false);
    }
    const handleOpenPassword = (event: React.FormEvent<HTMLButtonElement>) => {
        setModifyingPassword(true);
    }
    return <>
        <HeadUserWrapper>
            <h5>Les details de votre profil</h5>
            <CustomButton disbaled={modifying} handleClick={handleOpen} label="Modifier" />
            {<CustomButton disbaled={!modifying} handleClick={handleClose} label="Annuler" />}
        </HeadUserWrapper>
        {
            modifying
                ? <Formik
                    initialValues={{
                        nom: currentUser?.nom,
                        prenom: currentUser?.prenom,
                        email: currentUser?.email,
                        login: currentUser?.login
                    }}
                    onSubmit={handleSubmit}
                >
                    {
                        ({ handleChange, values: { nom, prenom, email, login }, handleSubmit }) => {
                            return (
                                <Form>
                                    <ContentFormWrapper>
                                        <h4 style={{ textAlign: "center" }} className="title">Informations personnelles </h4>
                                        <CustomField type="text" field="nom" value={nom} className="input1" handleChange={handleChange} label="Nom" />
                                        <CustomField type="text" field="prenom" value={prenom} className="input2" handleChange={handleChange} label="Prenom" />
                                        <CustomField type="text" field="login" value={login} className="input3" handleChange={handleChange} label="Nom d'utilisateur" />
                                        <CustomField type="text" field="email" value={email} className="input4" handleChange={handleChange} label="Email" />
                                        <CustomButton handleSubmit={handleSubmit} label="Valider" className="button1" disbaled={false} />
                                        <Link to="/home" className="div1">
                                        </Link>
                                    </ContentFormWrapper>
                                </Form>
                            )
                        }
                    }
                </Formik>
                : <>

                    <ContentUserWrapper>
                        Nom complet : <p> {currentUser?.nom} {currentUser?.prenom} </p>
                Profile : <p> {currentUser?.profil.name} </p>
                Nom d'utilisateur : <p>{currentUser?.login}</p>
                Email : <p>{currentUser?.email}</p>
                    </ContentUserWrapper>
                </>
        }
        {/* <ContentUserWrapper> */}
        <HeadUserWrapper>
            <h5>Changement de mot de passe :</h5>
            <CustomButton disbaled={modifyingPassword} handleClick={handleOpenPassword} label="Modifier" />
            {<CustomButton disbaled={!modifyingPassword} handleClick={handleClosePassword} label="Annuler" />}
        </HeadUserWrapper>
        {
            <ChangePassword modifying={modifyingPassword} />
        }

        {/* </ContentUserWrapper> */}
    </>
}