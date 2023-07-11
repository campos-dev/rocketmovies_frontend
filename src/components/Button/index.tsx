import { Container} from './styles';

export function Button({title}: {title: string}){
    return(
        <Container type='button'>
        {title}
        </Container>
    )
}