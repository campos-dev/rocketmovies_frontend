import {Link} from 'react-router-dom';
import {ChangeEvent, useState} from 'react';
import {Container, Form, Background} from './styles.ts';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiMail, FiLock} from 'react-icons/fi';


export function Signin(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
}

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
}
    return(
        <Container>
            <Form>
                <h1>Rocketmovies</h1>
                <p>App to rate movies</p>

                <h2>Login to your account</h2>

                <Input>
                    <FiMail />
                    <input type='text' placeholder='E-mail' onChange={handleEmailChange} value={email}/>
                </Input>

                <Input>
                    <FiLock />
                    <input type='password' placeholder='Password' onChange={handlePasswordChange} value={password}/>
                </Input>

                <Button>
                    <p>Signin</p>
                </Button>

                <Link to='/register'>
                    Create an account
                </Link>
            </Form>
            
            <Background />
        </Container>
    )
}