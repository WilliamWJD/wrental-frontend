import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { format } from 'date-fns';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Template } from "../../../components/Layoult"
import { TableHeader } from '../../../components/TableHeader';
import { Loading } from '../../../components/Loading';
import { Table } from "../../../components/Table";

import { api } from '../../../services/api';

import { Container, SearchInput } from './styles';
import { DeleteDialog } from '../DeleteDialog';

interface Tenant {
    id: string;
    name: string;
    birth: Date;
    rg: string;
    cpf: string;
    profession: string;
    fone1: string;
    status: boolean;
    dateFormmat: string;
}

export function TenantTable() {
    const [tenants, setTenants] = useState<Tenant[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [tenantSelected, setTenantSelected] = useState<Tenant>({} as Tenant)
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        async function loadTenants() {
            const response = await api.get('/tenants');

            const dateFormmat = response.data.map((item: Tenant) => {
                return {
                    ...item,
                    dateFormmat: format(new Date(item.birth), "dd/MM/yyyy")
                }
            })
            setTenants(dateFormmat)
            setLoading(false);
        }

        loadTenants();
    }, [])

    // useEffect(()=>{
    //     if(tenants){
    //         console.log(searchInput)
    //         let tenantsSearchFilter = tenants.filter((tenant:Tenant)=>tenant.name === SearchInput);
    //         console.log(tenantsSearchFilter)
    //     }
    // },[searchInput])

    async function handleDelete(){
        try{
            await api.delete(`/tenants/${tenantSelected.id}`);
            
            let updateTenants = tenants?.filter((tenant)=>tenant.id !== tenantSelected.id);

            setTenants(updateTenants);

            toast.success('inquilino excluído com sucesso')
            setTenantSelected({} as Tenant);
            closeModal();
        }catch(err){    
            toast.error('Erro ao excluir inquilino')
            console.log(err)
        }
    }

    function openModal(tenant:Tenant){
        setTenantSelected(tenant);
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <DeleteDialog
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                handleDelete={handleDelete}
                itemName={tenantSelected.name}
            />
            <Template>
                {loading ? (
                    <Loading />
                ) : (
                    <Container>
                        <TableHeader
                            totalItem={tenants ? tenants.length : 0}
                            totalItemName="Inquilinos"
                            routePath="/tenants/new"
                        />

                        <SearchInput>
                            <FaSearch size={20} color="#ddd" />
                            <input 
                                type="text" 
                                placeholder="Pesquise pelo nome do inquilino"
                                onChange={(e)=>setSearchInput(e.target.value)}
                                value={searchInput}
                            />
                        </SearchInput>

                        <Table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Data de nascimento</th>
                                    <th>RG</th>
                                    <th>CPF</th>
                                    <th>Profissão</th>
                                    <th>Fone 1</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tenants.map(tenant => (
                                    <tr className="teste" key={tenant.id}>
                                        <td>{tenant.name}</td>
                                        <td>{tenant.dateFormmat}</td>
                                        <td>{tenant.rg}</td>
                                        <td>{tenant.cpf}</td>
                                        <td>{tenant.profession}</td>
                                        <td>{tenant.fone1}</td>
                                        <td>
                                            <div
                                                style={tenant.status ? { borderColor: '#27ae60', color: '#27ae60' } : {}}
                                            >
                                                {tenant.status ? 'Ativo' : 'Inativo'}
                                            </div>
                                        </td>
                                        <td>
                                            <Link to={`/tenants/edit/${tenant.id}`}>
                                                <FaEdit size={20} color="#2980b9" />
                                            </Link>
                                            <FaTrash size={20} color="#e74c3c" onClick={()=>openModal(tenant)}/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )}
            </Template>
        </div>
    )
}