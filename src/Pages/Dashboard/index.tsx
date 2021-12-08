import { Header } from "../../components/Header";

import { Container } from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Inquilinos</li>
                    <li>Imoveis</li>
                    <li>Locação</li>
                </ul>
            </nav>
            <main>
                <h1>conteudo</h1>
            </main>
        </Container>
    )
}