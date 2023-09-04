import {FiPlus, FiX} from 'react-icons/fi'
import {Container} from './styles';

interface NoteItemProps {
    isNew?: boolean;
    value?: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    rest: unknown[];
    placeholder?: string;
}

export function NoteItem(props: NoteItemProps){
    const {isNew = false, onClick, onChange, value, rest, placeholder} = props;


    return(
        <Container $isnew={isNew}>
            <input type='text' onChange={onChange} value={value} readOnly={!isNew} placeholder={placeholder} {...rest}/>
            <button type='button' onClick={onClick}>
                {isNew ? <FiPlus/> : <FiX />}
            </button>
        </Container>
    )
}