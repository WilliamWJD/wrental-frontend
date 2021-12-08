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
    user: User,
    SignIn(credentials: SignInCredentials):Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: any){
    const [data, setData] = useState<AuthState>(()=>{
        const token = localStorage.getItem('@WRental:token')
        const user = localStorage.getItem('@WRental:user')

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            return{
                token,
                 user:JSON.parse(user)
            }
        }

        return {} as AuthState

    })
    

    const SignIn = useCallback( async ({ username, password })=>{
        const response = await api.post<AuthState>('/users/authenticated',{
            username,
            password
        })

        const { user, token } = response.data ;

        localStorage.setItem("@WRental:token", token);
        localStorage.setItem("@WRental:user", JSON.stringify(user));

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        setData({
            user,
            token
        })
    },[])

    return(
        <AuthContext.Provider
            value={{ SignIn, user: data.user }}
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