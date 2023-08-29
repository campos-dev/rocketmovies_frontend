import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Form, Background } from './styles.ts';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'; 
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { api } from '../../services/api.ts';


export function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSignup(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if (!name || !email || !password) {
            return alert("All fields are mandatory");
        }

        api.post("/users", { name, email, password })
            .then((data) => {
                console.log(data)
                alert("User was successfully registered!");
                navigate("/");
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("It was not possible to register");
                }
            });

    }

    return (
        <Container>
            <Form>
                <h1>Rocketmovies</h1>
                <p>App to rate movies</p>
                <h2>Create your account</h2>

                <Input>
                    <FiUser />
                    <input placeholder='name' type='text' onChange={(e) => setName(e.target.value)} value={name} />
                </Input>
                <Input>
                    <FiMail />
                    <input placeholder='e-mail' type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
                </Input>
                <Input>
                    <FiLock />
                    <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                </Input>
                <Button onClick={handleSignup}>
                    <p>Signup</p>
                </Button>

                <Link to='/'>&#129120; Back</Link>
            </Form>
            <Background />
        </Container>
    )
}