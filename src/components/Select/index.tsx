import { ReactNode } from "react";

interface SelectProps{
    children:ReactNode;
    name:string;
}

export function Select({ children, name }:SelectProps){
    return(
        <select name={name}>
            { children }
        </select>
    )
}