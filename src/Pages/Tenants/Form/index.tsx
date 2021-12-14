import { useRef } from 'react';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FaUser } from 'react-icons/fa';

import Input from "../../../components/Input";
import { Template } from "../../../components/Layoult";

import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container, InputGroup, HeaderForm } from './styles';

interface FormData {
    name: string;
    birth: string;
    rg: string;
    cpf: string;
    profession: string;
    email: string;
    fone1: string;
    fone2: string;
    marital_status: string;
}

export function TenantForm() {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    async function handleSave(data: FormData) {
        try {
            const Schema = Yup.object().shape({
                name: Yup.string().required('Nome é obrigatório'),
                birth: Yup.string().required('Data de nascimento obrigatório'),
                rg: Yup.string().required('RG é obrigatório'),
                cpf: Yup.string().required('CPF é obrigatório'),
                profession: Yup.string().required('Profissão é obrigatório'),
                email: Yup.string().required('E-mail é obrigatório'),
                fone1: Yup.string().required('Telefone é obrigatório'),
                marital_status: Yup.string().required('Estado civil é obrigatório')
            })

            await Schema.validate(data, {
                abortEarly: false
            })

            await api.post('/tenants', data)

            toast.success("Inquilino salvo com sucesso")

            history.push('/tenants')
        } catch (err: any) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err as Yup.ValidationError);
                formRef.current?.setErrors(errors)
            }
            toast.error("Erro ao salvar inquilino.")
            console.log(err.message);
        }
    }

    return (
        <Template>
            <Container>
                <Form ref={formRef} onSubmit={handleSave}>
                    <HeaderForm>
                        <div>
                            <FaUser color="#3F3D56" size={30} />
                            <h1>Novo inquilino</h1>
                        </div>
                        <button type="submit">Salvar</button>
                    </HeaderForm>

                    <InputGroup>
                        <Input name="name" type="text" label="Nome completo" />
                        <Input name="birth" type="date" label="Data de nascimento" />
                        <Input name="profession" type="text" label="Profissão" />
                    </InputGroup>
                    <InputGroup>
                        <Input name="rg" type="text" label="RG" />
                        <Input name="cpf" type="text" label="CPF" />
                        <Input name="fone1" type="text" label="Fone 1" />
                        <Input name="fone2" type="text" label="Fone 2" />
                    </InputGroup>
                    <InputGroup>
                        <Input name="email" type="email" label="E-mail" />
                        <Input name="marital_status" type="text" label="Estado civil" />
                    </InputGroup>

                </Form>
            </Container>
        </Template>
    )
}