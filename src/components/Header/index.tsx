import { Container, Profile } from './styles';
import { Input } from '../Input';
import {useAuth} from '../../hooks/auth';
import { ButtonText } from '../ButtonText';


import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import {api} from '../../services/api';
import { useState, useEffect } from 'react';



interface Tag {
  id: string;
  name: string;
}

export function Header() {
    const {signOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    const [selectedOption, setSelectedOption] = useState('title');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [tags, setTags] = useState<Tag[]>([]);
    const [tagsSelected, setTagsSelected] = useState<Tag[]>([]);
  

    function onOptionChange() {
    const rateValue = (document.querySelector('input[name="rate"]:checked') as HTMLInputElement).value;
    setRating(String(rateValue));
    }

    function handleTagSelected(tagName: string) {
        const alreadySelected = tagsSelected.some((tag) => tag.name === tagName);
        if(alreadySelected){
           const filteredTags = tagsSelected.filter(tag => tag.name !==tagName);
           setTagsSelected(filteredTags);
        }else{
            setTagsSelected((prevState) => [...prevState, { id: tagName, name: tagName }]);
        }
}

   useEffect(() => {
    async function fetchNotesTags() {
        const responseTags = await api.get(`/tags`);
        setTags(responseTags.data);

        const responseNotes = await api.get(`/notes?user_id&title&rating&tags`);
        console.log(responseNotes.data);
    }
    fetchNotesTags();
}, []);

    

    return (
        <Container>
            <h1>Rocketmovies</h1>
            <Input>
                <select onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="title">Search for a movie</option>
                    <option value="rating">Search by rating</option>
                    <option value="tags">Search by tags</option>
                </select>

                {selectedOption === 'title' ? <input type='text' 
                placeholder='Title' 
                onChange={e => setTitle(e.target.value)}
                value={title}
                /> : <></>}
                {selectedOption === 'rating' ? <div id='ratingContainer'>
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
                    </div>: <></>}
                 {selectedOption === 'tags' ? 
                  <div id='tagsContainer'>
                    <ButtonText 
                    title='all tags' 
                    onClick ={() => handleTagSelected('all')}
                    isActive={tagsSelected.length ===0}
                    />
                    {tags && tags.map(tag => <ButtonText 
                    key={tag.id} 
                    title={tag.name}
                    onClick={() => handleTagSelected(tag.name)}
                    isActive={tagsSelected.some((selectedTag) => selectedTag.name === tag.name)}
                     />)}
                  </div>: <></>}
            </Input>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <a onClick={() => signOut()}>logoff</a>
                </div>
                <a href='/profile'>
                    <img  src={avatarUrl} alt={user.name} />
                </a>
            </Profile>
        </Container>
    )
}