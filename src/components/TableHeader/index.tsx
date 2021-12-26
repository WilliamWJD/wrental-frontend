import { Link } from 'react-router-dom';

import { Container } from './styles';

interface TableHeaderProps{
    totalItem:number;
    totalItemName:string;
    routePath:string;
}

export function TableHeader({ totalItem, totalItemName, routePath }:TableHeaderProps) {
    return (
        <Container>
            <div>
                <h1>{totalItemName}</h1>
                <span>{totalItem} {totalItemName} cadastrados</span>
            </div>

            <Link to={routePath}>
                <button>Novo</button>
            </Link>
        </Container>
    )
}