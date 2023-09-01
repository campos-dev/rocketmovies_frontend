import { Container, Profile } from './styles';
import { Input } from '../Input';
import {useAuth} from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import {api} from '../../services/api';

export function Header() {
    const {signOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return (
        <Container>
            <h1>Rocketmovies</h1>
            <Input>
                <input placeholder='Search for a movie' />
            </Input>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <a onClick={() => signOut()}>logoff</a>
                </div>
                <a href='/profile'>
                    <img  src={avatarUrl} alt={user.name} />
                </a>
            </Profile>
        </Container>
    )
}