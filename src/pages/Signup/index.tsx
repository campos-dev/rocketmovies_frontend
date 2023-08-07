import {Link} from 'react-router-dom';
import {ChangeEvent, useState} from 'react';
import {Container, Form, Background} from './styles.ts';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiUser, FiMail,FiLock} from 'react-icons/fi';

export function Signup(){
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleUserChange(event: ChangeEvent<HTMLInputElement>) {
        setUser(event.target.value);
}
    function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
}

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
}

    return (
        <Container>
            <Form>
                <h1>Rocketmovies</h1>
                <p>App to rate movies</p>
                <h2>Create your account</h2>

                <Input>
                    <FiUser/>
                    <input placeholder='name' type='text' onChange={handleUserChange} value={user}/>
                </Input>
                <Input>
                    <FiMail/>
                    <input placeholder='e-mail' type='text' onChange={handleEmailChange} value={email}/>
                </Input>
                <Input>
                    <FiLock/>
                    <input placeholder='password' type='password' onChange={handlePasswordChange} value={password}/>
                </Input>
                <Button>
                    <p>Signup</p>
                </Button>

                <Link to='/'>&#129120; Back</Link>
            </Form>
            <Background />
        </Container>
    )
}