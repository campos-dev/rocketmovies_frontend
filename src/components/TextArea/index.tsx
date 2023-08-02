import { Container } from './styles.ts';
import { ChangeEvent, useState } from 'react';

export function TextArea(props: { placeholder: string } ) {
    const [value, setValue] = useState('');

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
}
    const { placeholder} = props;

    return (
        <Container placeholder={placeholder} onChange={handleChange} value={value}/>
    )
}