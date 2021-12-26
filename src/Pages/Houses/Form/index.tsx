import { useEffect, useRef, useState } from 'react';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { format } from 'date-fns';
import { FaHome } from 'react-icons/fa';

import Input from "../../../components/Input";
import { Template } from "../../../components/Layoult";
import { Loading } from '../../../components/Loading';

import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container, InputGroup, Content, HeaderContent } from './styles';

interface FormData {
    id?: string;
    name: string;
    description: string;
    value: number;
    state: string;
    address: string;
    district: string;
    city: string;
    num: number;
}

interface HouseFormParams {
    id: string;
}

export function HouseForm() {
    const [house, setHouse] = useState<FormData>({} as FormData);

    const { id } = useParams<HouseFormParams>();
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    useEffect(() => {
        if (id) {
            loadHouse();
        }
    }, [])

    async function loadHouse() {
        try {
            let response = await api.get(`/houses/${id}`);
            setHouse(response.data)
        } catch (err: any) {
            console.log(err.message)
        }
    }

    async function handleSave(data: FormData) {
        try {
            const Schema = Yup.object().shape({
                name: Yup.string().required('Nome é obrigatório'),
                description: Yup.string().required('A descrição é obrigatória'),
                value: Yup.number().required('O valor é obrigatório'),
                state: Yup.string().required('Estado é obrigatório'),
                address: Yup.string().required('Endereço é obrigatório'),
                district: Yup.string().required('Bairro é obrigatório'),
                city: Yup.string().required('Cidade é obrigatória'),
                num: Yup.number().required('O número é obrigatório')
            })

            await Schema.validate(data, {
                abortEarly: false
            })

            if (house.id) {
                await api.put(`/houses/${house.id}`, data);
                toast.success("Dados alterados com sucesso")
            } else {
                await api.post('/houses', data)
                toast.success("Imóvel salvo com sucesso")
            }

            history.push('/houses')
        } catch (err: any) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err as Yup.ValidationError);
                formRef.current?.setErrors(errors)
            }
            toast.error("Erro ao salvar imóvel.")
            console.log(err.message);
        }
    }

    return (
        <Template>
            {id && !house ? (
                <Loading />
            ) : (
                <Container>
                    <Content>
                        <HeaderContent>
                            <FaHome color="#3F3D56" size={25} />
                            <h1>Cadastrar novo imóvel</h1>
                        </HeaderContent>
                        <Form ref={formRef} onSubmit={handleSave} initialData={house}>
                            <Input name="name" type="text" label="Nome completo" />
                            <Input name="description" type="text" label="Descrição do imóvel" />
                            <Input name="value" type="number" label="Valor R$" />
                            <InputGroup>
                                <Input name="state" type="text" label="Estado" />
                                <Input name="address" type="text" label="Endereço" />
                            </InputGroup>
                            <InputGroup>
                                <Input name="district" type="text" label="Bairro" />
                                <Input name="city" type="text" label="Cidade" />
                                <Input name="num" type="number" label="Número da casa"/>
                            </InputGroup>

                            <button>Salvar</button>
                        </Form>
                    </Content>
                </Container>
            )}
        </Template>
    )
}