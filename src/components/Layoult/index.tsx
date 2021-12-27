import { useCallback, useState } from "react";
import { IconType } from "react-icons";
import { FaTachometerAlt, FaUsers, FaHome, FaFileContract, FaReceipt } from 'react-icons/fa';

import { Header } from "../../components/Header";

import { Container } from './styles';
import { NavLink } from "react-router-dom";

interface NavProps {
    title: string;
    path: string;
    icon: IconType;
}

export function Template({ children }: any) {
    const [navItems, setNavItems] = useState<NavProps[]>(() => [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: FaTachometerAlt
        },
        {
            title: "Inquilinos",
            path: "/tenants",
            icon: FaUsers
        },
        {
            title: "Imóveis",
            path: "/houses",
            icon: FaHome,
        },
        {
            title: "Locação",
            path: "/locations",
            icon: FaFileContract,
        },
        {
            title: "Recibos",
            path: "/receipts",
            icon: FaReceipt,
        },
    ])

    return (
        <Container>
            <Header />
            <nav>
                <ul>
                    {navItems.map(navItem => (
                        <NavLink
                            to={navItem.path}
                            key={navItem.path}
                            activeClassName="selected"
                        >
                     
                                {<navItem.icon size={30} color="#3F3D56" />}
                                {navItem.title}
                        
                        </NavLink>
                    ))}
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </Container>
    )
}