import {Container, Content} from './styles';
import { Header } from '../../components/Header';
import { Rate } from '../../components/Rate';
import {Tag} from '../../components/Tag';

export function Preview(){
    
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} at ${hours}:${minutes}`;
    
    return(
        <Container>
            <Header/>
            <a href="#">&#129120; Back</a>
            <main>
                <Content>
                    <div className="title_rate">
                        <h1>Interstellar</h1>
                        <Rate/>
                    </div>

                    <div className="user_entry">
                        <img src='https://github.com/campos-dev.png' alt='Picture from the user' />
                        <p>By Campos-dev</p>
                        <img src='../src/assets/timer.svg' alt='timewatch'/> 
                        <p>{formattedDate}</p>
                    </div>

                    <div className="tags">
                        <Tag title='Science fiction'/>
                        <Tag title='Drama'/>
                    </div>

                    <p>When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.
Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.
—ahmetkozan
In the near future around the American Midwest, Cooper, an ex-science engineer and pilot, is tied to his farming land with his daughter Murph and son Tom. As devastating sandstorms ravage Earth's crops, the people of Earth realize their life here is coming to an end as food begins to run out. Eventually stumbling upon a N.A.S.A. base near Cooper's home, he is asked to go on a daring mission with a few other scientists into a wormhole because of Cooper's scientific intellect and ability to pilot aircraft unlike the other crew members. In order to find a new home while Earth decays, Cooper must decide to either stay, or risk never seeing his children again in order to save the human race by finding another habitable planet.
—jmvd8
<br /><br />
A team of explorers must find the human race a new home after Earth is struck with worldwide food shortages and corn is the most valuable food. Utilizing a mysterious wormhole, they explore strange new worlds and could find a home to save the human race.
Murphy's law suggests that "whatever can go wrong, will go wrong." This movie plays with the idea of space exploration, time, and gravity, as Earth and the human race is on the verge of extinction. N.A.S.A.'s last hope looks to Coop, Brand, Romilly, and TARS under the direction of Professor Brand to search for answers in the deepest corners of space while dealing with Murphy's Law. Coop leaves behind his family in search of new horizons as Writer, Producer, and Director Christopher Nolan explores the eternal bonds of love between a father and his daughter.</p>

                </Content>
            </main>
        </Container>
    )
}