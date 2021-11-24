import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import backgroundLogin from '../../images/background-login.png';
import Input from '../../components/Input';
import { Container, Content } from './styles';
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const navigation = useNavigate();

    async function handleSubmit(data: any) {
        try{
            await api.post('/users', data)
            alert('Usuário criado com sucesso')
            navigation('/')
        }catch (err: any) {
            alert(err.message)
        }
    }

    return (
        <Container>
            <Content>
                <div>
                    <Form onSubmit={handleSubmit}>
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