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
import { DataNotFound } from '../../../components/DataNotFound';
import { format } from 'date-fns';

interface Location{
    id:string;
    date_start:Date;
    dateStartFormmat:string;
    dateEndFormmat:string;
    date_end:Date;
    house_id:string;
    tenant_id:string;
    contract_time:string;
    created_at: Date;
    createdAtFormmat:string
}

export function LocationTable() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [locationSelected, setLocationSelected] = useState<Location>({} as Location)

    useEffect(() => {
        async function loadLocations() {
            const response = await api.get('/locations');

            const dataFormmated = response.data.map((item: Location)=>{
                return{
                    ...item,
                    dateStartFormmat: format(new Date(item.date_start), "dd/MM/yyyy"),
                    dateEndFormmat: format(new Date(item.date_end), "dd/MM/yyyy"),
                    createdAtFormmat: format(new Date(item.created_at), "dd/MM/yyyy - HH:mm")
                }
            })

            setLocations(dataFormmated);
            setLoading(false);
        }

        loadLocations();
    }, [])

    const openModal = useCallback((location: Location) => {
        setLocationSelected(location)
        setIsOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    const handleDelete = useCallback(async () => {
        try {
            await api.delete(`/locations/${locationSelected.id}`);

            let updateLocations = locations?.filter((location) => location.id !== locationSelected.id);

            setLocations(updateLocations);

            toast.success('Locação excluída com sucesso')
            setLocationSelected({} as Location);
            closeModal();
        } catch (err) {
            toast.error('Erro ao excluir locação')
            console.log(err)
        }
    }, [locationSelected])

    return (
        <>
            <DeleteDialog
                modalIsOpen={isOpen}
                itemName="teste"
                closeModal={closeModal}
                handleDelete={handleDelete}
            />

            <Template>
                {loading ? (
                    <Loading />
                ) : (
                    <Container>
                        <TableHeader
                            totalItem={locations.length}
                            totalItemName="Locações"
                            routePath="/locations/new"
                        />

                        {locations.length === 0 ? (
                            <DataNotFound
                                itemName='locações'
                            />
                        ) : (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Inicio do contrato</th>
                                        <th>Término do contrato</th>
                                        <th>Imóvel</th>
                                        <th>Inquilino</th>
                                        <th>Tempo de contrato</th>
                                        <th>Data de criação</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {locations.map(location => (
                                        <tr key={location.id}>
                                            <td>{location.dateStartFormmat}</td>
                                            <td>{location.dateEndFormmat}</td>
                                            <td>{location.house_id}</td>
                                            <td>{location.tenant_id}</td>
                                            <td>{location.contract_time} Meses</td>
                                            <td>{location.createdAtFormmat}</td>
                                            <td>
                                                <Link to={`/locations/edit/${location.id}`}>
                                                    <FaEdit size={20} color="#2980b9" />
                                                </Link>
                                                <FaTrash size={20} color="#e74c3c" onClick={() => openModal(location)} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </Container>
                )}
            </Template>
        </>
    )
}