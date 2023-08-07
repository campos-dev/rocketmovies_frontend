import {Link} from 'react-router-dom';
import { Container, Form } from './styles.ts';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New() {
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
                            <input type='text' placeholder='movie title' />
                        </Input>

                        <fieldset>
                            <legend>Movie score</legend>
                            <input type="radio" id="one" name="rate" value="1" />
                            <label htmlFor="one">awful</label>
                            <input type="radio" id="two" name="rate" value="2" />
                            <label htmlFor="two">poor</label>
                            <input type="radio" id="three" name="rate" value="3" defaultChecked/>
                            <label htmlFor="three">normal</label>
                            <input type="radio" id="four" name="rate" value="4"  />
                            <label htmlFor="four">good</label>
                            <input type="radio" id="five" name="rate" value="5" />
                            <label htmlFor="five">excellent</label>
                        </fieldset>

                    </div>

                    <TextArea placeholder='notes'/>  

                    <h2>Tags</h2>  
                     
                    <div className="tagsContainer">
                        <NoteItem value="some value" onClick={() => console.log('clicked')} rest={[]} />
                        <NoteItem isNew placeholder='New tag' value='' onClick={() => console.log('clicked')} rest={[]} />
                    </div>

                    <div className="buttonsContainer">
                        <Button>
                            <h2>Remove movie</h2>
                        </Button>
                        <Button>
                            <h2>Save changes</h2>
                        </Button>
                    </div>
                    
                </Form>
            </main>
        </Container>
    )
}