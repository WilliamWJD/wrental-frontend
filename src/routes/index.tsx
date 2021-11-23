import { Routes, Route } from 'react-router-dom';

import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    )
}