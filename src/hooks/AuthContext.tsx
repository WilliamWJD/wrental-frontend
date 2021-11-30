import { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface User{
    name:string;
}

interface AuthState{
    token:string;
    user: User
}

interface SignInCredentials {
    username: string;
    password: string;
  }

interface AuthContextData{
    // user: User,
    SignIn(credentials: SignInCredentials):Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: any){
    const [data, setData] = useState<AuthState>()

    const SignIn = useCallback( async ({ username, password })=>{
        const response = await api.post<AuthState>('/users/authenticated',{
            username,
            password
        })

        const { user, token } = response.data ;

        localStorage.setItem("@WRental:token", token);
        localStorage.setItem("@WRental:user", JSON.stringify(user));

        setData({
            user,
            token
        })
    },[])

    return(
        <AuthContext.Provider
            value={{ SignIn }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth():AuthContextData{
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('useAuth must be used whitin as AuthProvider')
    }

    return context
}

export { AuthProvider, useAuth }