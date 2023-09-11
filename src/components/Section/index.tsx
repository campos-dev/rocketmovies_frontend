import {Container, StyledSection} from './styles.ts';
import {Tag} from '../Tag';
import {Rate} from '../Rate';
import { ButtonText } from '../../components/ButtonText';
import {useState, useEffect} from 'react';
import {api} from '../../services/api.ts';

import { useNotes } from '../../hooks/notes.tsx';

interface Note {
  id: string;
  title: string;
  description: string;
  [key: string]: any; 
}

interface TagType {
  id: string;
  name: string;
}


export function Section(){

    const [notes, setNotes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const {fetchNotes} = useNotes();

    async function handleRemoveMovie(){
        const movie = await api.get('/notes');
        console.log(movie + 'filme removido');
}
  
 useEffect(() => {
        async function fetchedNotes(){
            const response = await fetchNotes();
            setNotes(response);
            setIsLoaded(true); 
        }
        fetchedNotes();
    }, []);

    if (!isLoaded) {
        return <div>...Loading</div>; 
    }


    return(
        <Container>
        { 
        notes &&(notes as Note[]).map(note => {
                    return (
                        <StyledSection key={note.id}>
                            <div>
                                <ButtonText onClick={handleRemoveMovie} title={'\u00D7'}/>
                                <h2>{note.title}</h2>
                                <div className='rate'>
                                    <Rate/>
                                </div>

                                <p>
                                        {note.description ? note.description : ''}
                                </p>

                                <div className="div">
                                        {note.tag ? note.tag.map((tag: TagType) => <Tag key={tag.id} title={tag.name}/>) : null}
                                </div>
                            </div>
                            </StyledSection>
                            );
                        }
                    )
        } 
        </Container>
    )
}