import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import backgroundLogin from '../../images/background-login.png';
import Input from '../../components/Input';
import { api } from '../../services/api';

import { Container, Content } from './styles';

interface FormData{
    email:string;
    password:string;
}

export function Login(){
    async function handleSubmit(data: FormData){
        const response = await api.post('/users/authenticated');
        console.log(response.data);
    }

    return(
        <Container>
            <Content>
                <img src={backgroundLogin} alt="W-Rental" />
                <div>
                    <Form onSubmit={handleSubmit}>
                        <h1>Entre com suas Credenciais</h1>

                        <Input 
                            type="text" 
                            placeholder="E-mail" 
                            name="email"
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