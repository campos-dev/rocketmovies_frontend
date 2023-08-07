import {Container} from './styles.ts';
import {Tag} from '../Tag';
import {Rate} from '../Rate';

export function Section({title, synopse}: {title:string, synopse:string}){
    return(
    <Container>
        <h2>{title}</h2>
        <div className='rate'>
            <Rate/>
        </div>

        <p>
            {synopse}
        </p>

        <div className="div">
            <Tag title='Science-fiction'/>
            <Tag title='Drama'/>
        </div>

    </Container>
    )
}