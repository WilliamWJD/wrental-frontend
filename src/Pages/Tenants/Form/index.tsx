import { Form } from "@unform/web";
import Input from "../../../components/Input";
import { Template } from "../../../components/Layoult";

import { Container, InputGroup } from './styles';

export function TenantForm() {
    return (
        <Template>
            <Container>
                <h1>Novo inquilino</h1>
                <Form onSubmit={() => { }}>
                    <InputGroup>
                        <Input name="name" type="text" label="Nome completo"/>
                        <Input name="birth" type="date" label="Data de nascimento"/>
                    </InputGroup>
                    <Input name="rg" type="text" label="RG"/>
                    <Input name="cpf" type="text" label="CPF"/>
                    <Input name="profession" type="text" label="Profissão"/>
                    <Input name="email" type="email" label="E-mail"/>
                    <Input name="fone1" type="text" label="Fone 1"/>
                    <Input name="fone2" type="text" label="Fone 2"/>
                    <Input name="marital_status" type="text" label="Estado civil"/>
                </Form>
            </Container>
        </Template>
    )
}