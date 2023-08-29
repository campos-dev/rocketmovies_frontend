import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Container, Form, Background} from './styles.ts';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiMail, FiLock} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth.tsx';


export function Signin(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


    const {signIn} = useAuth();

    function handleSignIn(e: React.MouseEvent<HTMLButtonElement>){
        signIn({email,password}, e);
    }


    return(
        <Container>
            <Form>
                <h1>Rocketmovies</h1>
                <p>App to rate movies</p>

                <h2>Login to your account</h2>

                <Input>
                    <FiMail />
                    <input type='text' placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email}/>
                </Input>

                <Input>
                    <FiLock />
                    <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} value={password}/>
                </Input>

                <Button onClick={handleSignIn}>
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