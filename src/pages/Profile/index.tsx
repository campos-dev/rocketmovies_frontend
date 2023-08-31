import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Container, Form, Avatar} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';

import {useAuth} from '../../hooks/auth';



export function Profile(){
    const {user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState("");
    const [passwordNew, setPasswordNew] = useState("");


    async function handleUpdate(e: React.MouseEvent<HTMLButtonElement>){
        const user ={
            name, 
            email, 
            password:passwordNew,
            old_password:passwordOld,
        }
        await updateProfile({user}, e)
    }

    return(
        <Container>
            <header>
                <Link to="/">&#129120; Back</Link>
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
                    <input type='text' placeholder='name' onChange={e => setName(e.target.value)} value={name}/>
                </Input>
                <Input>
                    <FiMail/>
                    <input type='text' placeholder='e-mail' onChange={e => setEmail(e.target.value)} value={email}/>
                </Input>
                <Input>
                    <FiLock/>
                    <input type='password' placeholder='password' onChange={e => setPasswordOld(e.target.value)} value={passwordOld}/>
                </Input>
                <Input>
                    <FiLock/>
                    <input type='password' placeholder='new password' onChange={e => setPasswordNew(e.target.value)} value={passwordNew}/>
                </Input>
                <Button onClick={handleUpdate}>
                    <p>Save</p>
                </Button>
            </Form>
        </Container>
    )
}