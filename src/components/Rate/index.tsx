import {Container} from './styles';
import stars_5 from '../../assets/5_stars.svg';
import stars_4 from '../../assets/4_stars.svg';
import stars_3 from '../../assets/3_stars.svg';
import stars_2 from '../../assets/2_stars.svg';
import stars_1 from '../../assets/1_stars.svg';

export function Rate(){
    
    return(
        <Container>
            <img src={stars_5} alt='five stars' id='stars_5' className='hide'/>
            <img src={stars_4} alt='four stars' id='stars_4' className=''/>
            <img src={stars_3} alt='three stars' id='stars_3' className='hide'/>
            <img src={stars_2} alt='two stars' id='stars_2' className='hide'/>
            <img src={stars_1} alt='one star' id='stars_1' className='hide'/>
        </Container> 
    )
}