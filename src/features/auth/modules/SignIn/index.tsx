import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IForm } from '../../../../interfaces';
import { signIn } from "../../actions/index";
import { useDispatchUser } from '../../providers';
import { InputWrapper, LoginWrapper } from './styles';

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
                <Form>
                    <LoginWrapper>
                        <h3>Se connecter</h3>

                        <InputWrapper>
                            <label htmlFor="login">Login</label>
                        <Field id="login" name="login" placeholder="Votre login" />
                        </InputWrapper>

                        <InputWrapper>
                        <label htmlFor="password">Mot de passe</label>
                        <Field id="password" name="password" placeholder="Votre mot de passe" type="password" />
                        </InputWrapper>

                    <button type="submit">Connecter</button>
                    </LoginWrapper>
                </Form>
        </Formik>
    )
}

export default Login;