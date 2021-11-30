import { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import backgroundLogin from '../../images/background-login.png';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';

import { Container, Content } from './styles';
import { toast } from 'react-toastify';

interface FormData {
    username: string;
    password: string;
}

export function SignIn() {
    const formRef = useRef<FormHandles>(null);
    const { SignIn } = useAuth();

    async function handleSubmit(data: FormData) {
        try {
            const schema = Yup.object().shape({
                username: Yup.string().required('Login obrigatório'),
                password: Yup.string().min(6, 'Mínimo de 6 digitos')
            })

            await schema.validate(data, {
                abortEarly: false
            });

            await SignIn(data);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err as Yup.ValidationError);
                formRef.current?.setErrors(errors)
            }
            toast.error("Usuário ou senha inválido")
        }
    }

    return (
        <Container>
            <Content>
                <img src={backgroundLogin} alt="W-Rental" />
                <div>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Entre com suas Credenciais</h1>

                        <Input
                            type="text"
                            placeholder="Login"
                            name="username"
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            name="password"
                        />

                        <button type="submit">Acessar plataforma</button>
                    </Form>
                    <Link to="/signup">Inscrever-se</Link>
                </div>
            </Content>
        </Container>
    )
}