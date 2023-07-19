import {Container, Profile} from './styles';
import {Input} from '../Input';

export function Header(){
    return(
        <Container>
            <h1>Rocketnotes</h1>
            <Input>
                <input placeholder='Search for a movie'/>
            </Input>
            
            <Profile>
                <div>
                <strong>Campos-dev</strong>
                <span>logoff</span>
                </div>
                <img src='https://github.com/campos-dev.png' alt='Picture from the user'/>
            </Profile>
        </Container>
    )
}