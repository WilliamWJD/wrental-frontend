import { Container, Content, Form } from './styles';

import backgroundLogin from '../../images/background-login.png';

export function Login(){
    return(
        <Container>
            <Content>
                <img src={backgroundLogin} alt="W-Rental" />
                <Form>
                    <h1>Entre com suas Credenciais</h1>

                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>

                    <button type="submit">Acessar plataforma</button>
                    <a href="#">Esqueci minha senha</a>
                </Form>
            </Content>
        </Container>
    )
}