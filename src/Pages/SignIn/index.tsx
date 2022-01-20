import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import backgroundLogin from '../../images/background-login.png';
import { useAuth } from '../../hooks/AuthContext';

import { Container, Content } from './styles';
import { Input } from '../../components/InputForm';

interface FormData {
    username: string;
    password: string;
}

const SignInSchema = Yup.object().shape({
    username: Yup.string().required('Login obrigatório'),
    password: Yup.string().min(6, 'Mínimo de 6 digitos')
})

export function SignIn() {
    const { SignIn } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(SignInSchema)
    });

    const handleLogin: SubmitHandler<FormData> = async (data, event) => {
        try {
            event?.preventDefault()
            await SignIn(data);
            console.log(data)
        } catch (err) {
            toast.error("Usuário ou senha inválido")
        }
    }

    return (
        <Container>
            <Content>
                <img src={backgroundLogin} alt="W-Rental" />
                <div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h1>Entre com suas Credenciais</h1>
                        <Input
                            placeholder='Login'
                            error={errors.username}
                            {...register('username')}
                        />

                        <Input
                            placeholder='Senha'
                            type="password"
                            error={errors.password}
                            {...register('password')}
                        />
                        <button type="submit">Acessar plataforma</button>
                    </form>
                    <Link to="/signup">Inscrever-se</Link>
                </div>
            </Content>
        </Container>
    )
}