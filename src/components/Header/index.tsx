import { Container, Profile } from './styles';
import { Input } from '../Input';
import {useAuth} from '../../hooks/auth';

export function Header() {
    const {signOut} = useAuth();
    return (
        <Container>
            <h1>Rocketmovies</h1>
            <Input>
                <input placeholder='Search for a movie' />
            </Input>

            <Profile>
                <div>
                    <strong>Campos-dev</strong>
                    <a onClick={() => signOut()}>logoff</a>
                </div>
                <a href='/profile'>
                    <img  src='https://github.com/campos-dev.png' alt='Picture from the user' />
                </a>
            </Profile>
        </Container>
    )
}