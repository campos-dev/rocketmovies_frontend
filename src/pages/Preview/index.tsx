import { Header } from '../../components/Header';
import {Container, Content} from './styles';

export function Preview(){
    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <a href="#">&#129120; Back</a>

                </Content>
            </main>
        </Container>
    )
}