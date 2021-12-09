import { useState } from "react";
import { Header } from "../../components/Header";

import { FaTachometerAlt, FaUsers, FaHome, FaFileContract, FaReceipt } from 'react-icons/fa';

import { Container } from './styles';

export function Dashboard() {
    const [active, setActive] = useState(true);

    return (
        <Container isActive={active}>
            <Header />
            <nav>
                <ul>
                    <li>
                        <FaTachometerAlt color="#fff" size={25}/>
                        Dashboard
                    </li>
                    <li>
                        <FaUsers color="#2F2E41" size={25}/>
                        Inquilinos
                    </li>
                    <li>
                        <FaHome color="#2F2E41" size={25}/>
                        Imoveis
                    </li>
                    <li>
                        <FaFileContract color="#2F2E41" size={25}/>
                        Locação
                    </li>
                    <li>
                        <FaReceipt color="#2F2E41" size={25}/>
                        Recibos
                    </li>
                </ul>
            </nav>
            <main>
                <h1>conteudo</h1>
            </main>
        </Container>
    )
}