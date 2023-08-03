import {ChangeEvent, useState} from 'react';
import {FiPlus, FiX} from 'react-icons/fi'
import {Container} from './styles';

interface NoteItemProps {
    isNew?: boolean;
    value: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    rest: unknown[];
    placeholder?: string;
}

export function NoteItem(props: NoteItemProps){
    const {isNew = false, onClick, rest, placeholder} = props;
    const [text, setText] = useState('');

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        setText(event.target.value);
    }

    return(
        <Container $isnew={isNew}>
            <input type='text' onChange={handleInputChange} value={text} readOnly={!isNew} placeholder={placeholder} {...rest}/>
            <button type='button' onClick={onClick}>
                {isNew ? <FiPlus/> : <FiX />}
            </button>
        </Container>
    )
}