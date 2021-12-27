import { Container } from './styles';

interface DataNotFoundProps{
    itemName:string;
}

export function DataNotFound({ itemName }:DataNotFoundProps){
    return(
        <Container>
            <h1>Opa! Você ainda não tem {itemName} cadastrados 😕</h1>
        </Container>
    )
}