import { Header } from "../../components/Header";

import { FaTachometerAlt, FaUsers, FaHome, FaFileContract, FaReceipt } from 'react-icons/fa';

import { Container } from './styles';
import { Link } from "react-router-dom";

export function Template({ children }: any) {
    return (
        <Container>
            <Header />
            <nav>
                <ul>
                    <li>
                        <FaTachometerAlt color="#2F2E41" size={25}/>
                        Dashboard
                    </li>
                    <Link to="/tenants">
                    <li>
                        <FaUsers color="#2F2E41" size={25}/>
                        Inquilinos
                    </li>
                    </Link>
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
               {children}
            </main>
        </Container>
    )
}