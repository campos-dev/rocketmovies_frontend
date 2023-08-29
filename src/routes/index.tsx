import {BrowserRouter} from 'react-router-dom';
import {useAuth} from '../hooks/auth';

import {AppRoutes} from './AppRoutes';
import {AuthRoutes} from './AuthRoutes';


export function Routes(){
    const {user} = useAuth();
    return (
        <BrowserRouter>
            {user? <AppRoutes/> :<AuthRoutes/>}
        </BrowserRouter>
    )
}
