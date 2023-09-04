import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { Container, Form } from './styles.ts';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import {api} from '../../services/api.ts';

export function New() {
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(3);

    const [tags, setTags] = useState<string[]>([]);
    const [newTag, setNewTag] = useState('');

    const navigate = useNavigate();


    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(deleted: string){
        setTags(prevState => prevState.filter(tag => tag !==deleted))
    }


    async function handleAddNewMovie(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        if(!title){
            return alert("Movie title is mandatory!")
        }
        
        if(newTag){
            return alert("You must click on the '+' to add the tag");
        }

        await api.post('/notes', {title, description, tags, rating});
        alert('New movie added!');
        navigate('/');
    }

    async function handleRemoveMovie(){
        const movie = await api.get('/notes');
        console.log(movie);
    }

        function onOptionChange() {
        const rateValue = (document.querySelector('input[name="rate"]:checked') as HTMLInputElement).value;
        setRating(Number(rateValue));
    }


    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <Link to='/'>&#129120; Back</Link>
                        <h1>New movie</h1>
                    </header>

                    <div className="title_rating">
                        <Input>
                            <input type='text' onChange={(e => setTitle(e.target.value))} value={title} placeholder='movie title' />
                        </Input>

                        <fieldset>
                            <legend>Movie score</legend>
                            <input type="radio" id="one" name="rate" value="1" onChange={onOptionChange}/>
                            <label htmlFor="one">awful</label>
                            <input type="radio" id="two" name="rate" value="2" onChange={onOptionChange}/>
                            <label htmlFor="two">poor</label>
                            <input type="radio" id="three" name="rate" value="3" onChange={onOptionChange} defaultChecked/>
                            <label htmlFor="three">normal</label>
                            <input type="radio" id="four" name="rate" value="4"  onChange={onOptionChange}/>
                            <label htmlFor="four">good</label>
                            <input type="radio" id="five" name="rate" value="5" onChange={onOptionChange}/>
                            <label htmlFor="five">excellent</label>
                        </fieldset>

                    </div>

                    <TextArea placeholder='notes' onChange={(e => setDescription(e.target.value))} value={description}/>  

                    <h2>Tags</h2>  
                     
                    <div className="tagsContainer">
                       {tags.map((tag,index) => (
                        <NoteItem 
                        key={String(index)}
                        value= {tag}
                        onClick={() => handleRemoveTag(tag)} rest={[]} />
                       ))}
                        
                        <NoteItem 
                        isNew 
                        placeholder='New tag' 
                        onChange={e => setNewTag(e.target.value)} 
                        value={newTag}
                        onClick={handleAddTag} rest={[]} />
                    </div>

                    <div className="buttonsContainer">
                        <Button onClick={handleRemoveMovie}>
                            <h2>Remove movie</h2>
                        </Button>
                        <Button onClick={handleAddNewMovie}>
                            <h2>Save changes</h2>
                        </Button>
                    </div>
                    
                </Form>
            </main>
        </Container>
    )
}