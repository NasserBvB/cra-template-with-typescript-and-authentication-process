import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import { IForm } from '../../../../interfaces';
import { signIn } from "../../actions/index";
import { useDispatchUser, useUserState } from '../../providers';
import { InputWrapper, LoginWrapper } from './styles';

const Login: React.FC<{}> = ({ }) => {
    const history = useHistory();
    const { loading } = useUserState()
    const { dispatch } = useDispatchUser();

    const handleSubmit = useMemo(() => {
        return ({ login, password }: IForm, { setSubmitting, }: FormikHelpers<IForm>) => {
            signIn(dispatch, { password, login })
            history.push('/')

        }
    }, []);

    return (
        !loading ?
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
                            <Field id="login" name="login" placeholder="Doe" />
                        </InputWrapper>

                        <InputWrapper>
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="john@acme.com" type="password" />
                        </InputWrapper>

                        <button type="submit">Submit</button>
                    </LoginWrapper>
                </Form>
            </Formik>
            : <Loading />
    )
}

export default Login;