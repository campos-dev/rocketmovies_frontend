import { createContext, ReactNode, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface SignInData {
    email: string;
    password: string;
}

interface AuthContextData {
    signIn: (data: SignInData, e: React.MouseEvent<HTMLButtonElement>) => void;
    signOut: () => void;
    user: string;
}

interface Data{
    user:string,
    token:string
}

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [data, setData] = useState<Data>({ user: '', token: '' });

    async function signIn({ email, password }: SignInData, e: React.MouseEvent<HTMLButtonElement>) {
        try {
            e.preventDefault();
            const response = await api.post('/sessions', { email, password });
            const {user,token} = response.data;

            localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
            localStorage.setItem('@rocketmovies:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({user,token})

        } catch (error:any) {
            if (error.response) {
                return alert(error.response.data.message);
            }
            return alert("It's not possible to sign in");
        }
    }

    function signOut() {
        localStorage.removeItem('@rocketmovies:token');
        localStorage.removeItem('@rocketmovies:user');
        setData({ user: '', token: '' });
}

    useEffect(()=>{
        const token = localStorage.getItem('@rocketmovies:token');
        const user = localStorage.getItem('@rocketmovies:user');

        if(token && user){
            console.log('rolou')
             api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
             setData({user:JSON.parse(user),token})
        }
    },[])

    return (
        <AuthContext.Provider value={{ signIn, signOut, user:data.user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}