import {Container, Form, Background} from './styles.ts';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiMail, FiLock} from 'react-icons/fi';

export function Signin(){
    return(
        <Container>
            <Form>
                <h1>Rocketmovies</h1>
                <p>App to rate movies</p>

                <h2>Login to your account</h2>

                <Input>
                    <FiMail />
                    <input type='text' placeholder='E-mail'/>
                </Input>

                <Input>
                    <FiLock />
                    <input type='text' placeholder='Password'/>
                </Input>

                <Button>
                    <p>Signin</p>
                </Button>

                <a href='#'>
                    Create an account
                </a>
            </Form>
            
            <Background />
        </Container>
    )
}