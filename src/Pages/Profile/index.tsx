import { Template } from "../../components/Layoult";
import { useAuth } from "../../hooks/AuthContext"

export function Profile(){
    const { SignOut } = useAuth();

    return(
        <Template>
            <button onClick={SignOut}>Sair</button>
        </Template>
    )
}