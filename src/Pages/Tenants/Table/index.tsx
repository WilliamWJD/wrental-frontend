import { Link } from "react-router-dom"
import { Template } from "../../../components/Layoult"

export function TenantTable(){
    return(
        <div>
            <Template>
                <Link to="/tenants/new">
                    <button>Novo</button>
                </Link>
            </Template>
        </div>
    )
}