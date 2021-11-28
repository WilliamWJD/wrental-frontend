import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import backgroundLogin from '../../images/background-login.png';
import Input from '../../components/Input';
import { Container, Content } from './styles';
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";
import getValidationErrors from '../../utils/getValidationErrors';

export function SignUp() {
    const navigation = useNavigate();
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback ( async (data: object) => {
        try {
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                username: Yup.string().required('Login obrigatório'),
                email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
                password: Yup.string().min(6,'Senha obrigatória')
            })

            //abortEarly retorna todos os erros que ele encontrar, por padrão ele é true fazendo com que ele retorne apenas o primeiro erro
            await schema.validate(data,{
                abortEarly:false
            })

            await api.post('/users', data)
            
            toast.success("Usuário cadastrado com sucesso")

            navigation('/')
        } catch (err) {
            const errors = getValidationErrors(err as Yup.ValidationError)
            formRef.current?.setErrors(errors);
            toast.error("Erro ao cadastrar usuário")
            console.log({err})
        }
    }, [])

    return (
        <Container>
            <Content>
                <div>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Crie sua conta na plataforma</h1>
                        <Input
                            type="text"
                            placeholder="Nome completo"
                            name="name"
                        />
                        <Input
                            type="text"
                            placeholder="Login"
                            name="username"
                        />
                        <Input
                            type="email"
                            placeholder="Seu e-mail favorito"
                            name="email"
                        />
                        <Input
                            type="password"
                            placeholder="Sua senha secreta"
                            name="password"
                        />
                        <button type="submit">Cadastrar-se</button>
                    </Form>
                    <Link to="/">Cancelar</Link>
                </div>
                <img src={backgroundLogin} alt="W-Rental" />
            </Content>
        </Container>
    )
}