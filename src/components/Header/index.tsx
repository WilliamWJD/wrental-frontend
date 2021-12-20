import { Container, Content, Logo, Profile } from './styles';

import { useAuth } from '../../hooks/AuthContext';

import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Header(){
    const { user } = useAuth();

    return(
        <Container>
            <Content>
                <Logo>
                    <FaHome size={35} color="#3F3D56"/>
                    <strong><span>W-</span>Rental</strong>
                </Logo>
            <Link to="/profile">
                <Profile>
                    <div>
                        <strong>{user.name}</strong>
                        <span>Meu perfil</span>
                    </div>
                    <img src="https://github.com/williamwjd.png" alt="william" />
                </Profile>
                </Link>
            </Content>
        </Container>
    )
}