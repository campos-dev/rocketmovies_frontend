import { Container} from './styles';

export function Button({children}: {children: JSX.Element | JSX.Element[]}){
    return(
        <Container type='button'>
            {children}
        </Container>
    )
}