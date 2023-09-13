import {Container, StyledSection} from './styles.ts';
import {Tag} from '../Tag';
import {Rate} from '../Rate';
import {useContext} from 'react';
import { NotesContext } from '../../hooks/notes.tsx';
import{useNavigate} from 'react-router-dom';

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
    const navigate = useNavigate();
    const { notes } = useContext(NotesContext);
  

    function handleNotePreview(id:string){
        navigate(`/preview/${id}`)
    }
 
    return(
        <Container>
        { 
        notes &&(notes as Note[]).map(note => {
                    return (
                        <StyledSection key={note.id} onClick={() => handleNotePreview(note.id)}>
                            <div>
                                <h2>{note.title}</h2>
                                <div className='rate'>
                                    <Rate rating={note.rating} />
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