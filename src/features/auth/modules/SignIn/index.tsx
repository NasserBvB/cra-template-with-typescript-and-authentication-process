import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CustomBox } from '../../../../components/CustomBox';
import { CustomButton } from '../../../../components/CustomButton';
import { CustomField } from '../../../../components/Field';
import { IForm } from '../../../../interfaces';
import { signIn } from "../../actions/index";
import { useDispatchUser } from '../../providers';

const Login: React.FC<{}> = ({ }) => {
    const history = useHistory();
    const { dispatch } = useDispatchUser();

    const handleSubmit = async ({ login, password }: IForm, { setSubmitting, }: FormikHelpers<IForm>) => {
        const status = await signIn(dispatch, { password, login })
        if (status) {
            history.push('/home')
        }
    }


    return (
            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                onSubmit={handleSubmit}
            >
            {
                ({ handleChange, values: { password, login }, handleSubmit }) => {
                    return (
                        <Form>
                            <CustomBox>
                        <h3>Se connecter</h3>
                        <CustomField field="password" value={password} handleChange={handleChange} label="Password" />
                        <CustomField field="login" value={login} handleChange={handleChange} label="Login" />
                                <CustomButton handleSubmit={handleSubmit} label="Connecter" />
                        Mot de passe oublie ?<Link to="/forgotten-password">Recuperer</Link>
                            </CustomBox>
                </Form>
                    )
                }
            }
        </Formik>
    )
}

export default Login;