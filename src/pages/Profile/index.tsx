import {Container, Form, Avatar} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

export function Profile(){
    return(
        <Container>
            <header>
                <a href="#">&#129120; Back</a>
            </header>
            <Form>
                <Avatar>
                    <img src='https://github.com/campos-dev.png' alt="User's picture" />
                    <label htmlFor='avatar'>
                        <FiCamera />
                        <input id='avatar' type='input'/>
                        </label>
                </Avatar>
                <Input>
                    <FiUser/>
                    <input type='text' placeholder='name' />
                </Input>
                <Input>
                    <FiMail/>
                    <input type='text' placeholder='e-mail'/>
                </Input>
                <Input>
                    <FiLock/>
                    <input type='password' placeholder='password'/>
                </Input>
                <Input>
                    <FiLock/>
                    <input type='password' placeholder='new password'/>
                </Input>
                <Button>
                    <p>Save</p>
                </Button>
            </Form>
        </Container>
    )
}