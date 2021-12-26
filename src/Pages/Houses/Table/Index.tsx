import { Container } from './styles';

import { Template } from '../../../components/Layoult';
import { TableHeader } from '../../../components/TableHeader';
import { Table } from '../../../components/Table';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Loading } from '../../../components/Loading';

interface House {
    id: string;
    name: string;
    description: string;
    value: number;
    state: string;
    address: string;
    district: string;
    city: string;
    num: number;
}

export function HouseTable() {
    const [houses, setHouses] = useState<House[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadHouses() {
            const response = await api.get('/houses');
            setHouses(response.data);
            setLoading(false);
        }

        loadHouses();
    }, [])

    return (
        <Template>
            {loading ? (
                <Loading />
            ) : (
                <Container>
                    <TableHeader
                        totalItem={houses.length}
                        totalItemName="Imóveis"
                        routePath="/houses/new"
                    />

                    <Table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Valor R$</th>
                                <th>Estado</th>
                                <th>Endereço</th>
                                <th>Bairro</th>
                                <th>Cidade</th>
                                <th>Nº</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {houses.map(house => (
                                <tr key={house.id}>
                                    <td>{house.name}</td>
                                    <td>{house.description}</td>
                                    <td>{house.value}</td>
                                    <td>{house.state}</td>
                                    <td>{house.address}</td>
                                    <td>{house.district}</td>
                                    <td>{house.city}</td>
                                    <td>{house.num}</td>
                                    <td>
                                        <Link to={`/houses/edit/${house.id}`}>
                                            <FaEdit size={20} color="#2980b9" />
                                        </Link>
                                        <FaTrash size={20} color="#e74c3c" onClick={() => { }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            )}
        </Template>
    )
}