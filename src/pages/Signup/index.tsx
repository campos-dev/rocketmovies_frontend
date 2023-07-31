import {Container, Form, Background} from './styles.ts';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiUser, FiMail,FiLock} from 'react-icons/fi';

export function Signup(){
    return (
        <Container>
            <Form>
                <h1>Rocketmovies</h1>
                <p>App to rate movies</p>
                <h2>Create your account</h2>

                <Input>
                    <FiUser/>
                    <input placeholder='name' type='text'/>
                </Input>
                <Input>
                    <FiMail/>
                    <input placeholder='e-mail' type='text'/>
                </Input>
                <Input>
                    <FiLock/>
                    <input placeholder='password' type='password'/>
                </Input>
                <Button>
                    <p>Signup</p>
                </Button>

                <a href='#'>&#129120; Back</a>
            </Form>
            <Background />
        </Container>
    )
}