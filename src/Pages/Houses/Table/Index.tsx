import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from './styles';

import { Template } from '../../../components/Layoult';
import { TableHeader } from '../../../components/TableHeader';
import { Table } from '../../../components/Table';
import { api } from '../../../services/api';
import { Loading } from '../../../components/Loading';
import { DeleteDialog } from '../DeleteDialog';

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
    const [isOpen, setIsOpen] = useState(false);
    const [houseSelected, setHouseSelected] = useState<House>({} as House)

    useEffect(() => {
        async function loadHouses() {
            const response = await api.get('/houses');
            setHouses(response.data);
            setLoading(false);
        }

        loadHouses();
    }, [])

    const openModal = useCallback((house: House) => {
        setHouseSelected(house)
        setIsOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    const handleDelete = useCallback(async() => {
        try {
            console.log(houseSelected.id)
            await api.delete(`/houses/${houseSelected.id}`);

            let updateHouses = houses?.filter((house) => house.id !== houseSelected.id);

            setHouses(updateHouses);

            toast.success('Imóvel excluído com sucesso')
            setHouseSelected({} as House);
            closeModal();
        } catch (err) {
            toast.error('Erro ao excluir imóvel')
            console.log(err)
        }
    }, [houseSelected])

    return (
        <>
            <DeleteDialog
                modalIsOpen={isOpen}
                itemName={houseSelected.name}
                closeModal={closeModal}
                handleDelete={handleDelete}
            />

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
                                            <FaTrash size={20} color="#e74c3c" onClick={()=>openModal(house)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )}
            </Template>
        </>
    )
}