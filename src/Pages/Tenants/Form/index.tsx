import { useRef } from 'react';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import Input from "../../../components/Input";
import { Template } from "../../../components/Layoult";

import { Container, InputGroup } from './styles';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import getValidationErrors from '../../../utils/getValidationErrors';

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
                rg:Yup.string().required('RG é obrigatório'),
                cpf:Yup.string().required('CPF é obrigatório'),
                profession:Yup.string().required('Profissão é obrigatório'),
                email: Yup.string().required('E-mail é obrigatório'),
                fone1: Yup.string().required('Telefone é obrigatório'),
                marital_status: Yup.string().required('Estado civil é obrigatório')
            })

            await Schema.validate(data,{
                abortEarly:false
            })
            
            await api.post('/tenants', data);
            
            toast.success("Inquilino salvo com sucesso")

            history.push('/tenants')
        } catch (err: any) {
            if(err instanceof Yup.ValidationError){
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
                <h1>Novo inquilino</h1>
                <Form ref={formRef} onSubmit={handleSave}>
                    <InputGroup>
                        <Input name="name" type="text" label="Nome completo" />
                        <Input name="birth" type="date" label="Data de nascimento" />
                    </InputGroup>
                    <InputGroup>
                        <Input name="rg" type="text" label="RG" />
                        <Input name="cpf" type="text" label="CPF" />
                    </InputGroup>
                    <Input name="profession" type="text" label="Profissão" />
                    <Input name="email" type="email" label="E-mail" />
                    <InputGroup>
                        <Input name="fone1" type="text" label="Fone 1" />
                        <Input name="fone2" type="text" label="Fone 2" />
                    </InputGroup>
                    <Input name="marital_status" type="text" label="Estado civil" />

                    <button type="submit">Salvar</button>
                </Form>
            </Container>
        </Template>
    )
}