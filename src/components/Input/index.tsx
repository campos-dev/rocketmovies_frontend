import {Container} from './styles.ts'

export function Input ({ children}:{ children: JSX.Element | JSX.Element[]}){
    return(
    <Container >
        {children}
    </Container>
    )
   
}