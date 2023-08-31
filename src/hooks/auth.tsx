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
    updateProfile: (user: any, e: React.MouseEvent<HTMLButtonElement>) => void;
    user: any;
    token?:string
}



interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [data, setData] = useState({ user: '', token: '' });

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
        setData({ user:'', token: '' });

}

async function updateProfile({user}:any, e: React.MouseEvent<HTMLButtonElement>){
    try{
        e.preventDefault();
        await api.put('/users', user);
        localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
        setData({user, token:data.token});
        return alert('Profile updated!');
    }catch (error:any) {
                if (error.response) {
                    return alert(error.response.data.message);
                }
                return alert("It's not possible to update");
            }
    }

    useEffect(()=>{
        const token = localStorage.getItem('@rocketmovies:token');
        const user = localStorage.getItem('@rocketmovies:user');

        if(token && user){
             api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
             setData({user:JSON.parse(user),token})
        }
    },[])

    return (
        <AuthContext.Provider value={{ signIn, signOut, updateProfile, user:data.user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}