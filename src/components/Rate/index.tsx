import {Container} from './styles';

export function Rate(){
    
    return(
        <Container>
            <img src='/src/assets/5_stars.svg' alt='five stars' className='hide'/>
            <img src='/src/assets/4_stars.svg' alt='four stars' className=''/>
            <img src='/src/assets/3_stars.svg' alt='three stars' className='hide'/>
            <img src='/src/assets/2_stars.svg' alt='two stars' className='hide'/>
            <img src='/src/assets/1_stars.svg' alt='one star' className='hide'/>
        </Container> 
    )
}