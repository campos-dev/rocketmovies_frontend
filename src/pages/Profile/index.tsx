import {ChangeEvent, useState} from 'react';
import {Container, Form, Avatar} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

export function Profile(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOld, setPasswordOld] = useState("");
    const [passwordNew, setPasswordNew] = useState("");

     function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
}
    function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
}

    function handlePasswordOldChange(event: ChangeEvent<HTMLInputElement>) {
        setPasswordOld(event.target.value);
}

    function handlePasswordNewChange(event: ChangeEvent<HTMLInputElement>) {
        setPasswordNew(event.target.value);
}


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
                    <input type='text' placeholder='name' onChange={handleNameChange} value={name}/>
                </Input>
                <Input>
                    <FiMail/>
                    <input type='text' placeholder='e-mail' onChange={handleEmailChange} value={email}/>
                </Input>
                <Input>
                    <FiLock/>
                    <input type='password' placeholder='password' onChange={handlePasswordOldChange} value={passwordOld}/>
                </Input>
                <Input>
                    <FiLock/>
                    <input type='password' placeholder='new password' onChange={handlePasswordNewChange} value={passwordNew}/>
                </Input>
                <Button>
                    <p>Save</p>
                </Button>
            </Form>
        </Container>
    )
}