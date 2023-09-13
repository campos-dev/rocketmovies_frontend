import {Container, Content} from './styles';
import { Header } from '../../components/Header';
import {ButtonText} from '../../components/ButtonText';
import { Rate } from '../../components/Rate';
import {Tag} from '../../components/Tag';
import {api} from '../../services/api.ts';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

interface TagType {
  title:string;
  id:string;
}

interface DataType {
    tag: TagType[];
    title:string;
    rating:number;
    description: string;
    created_at:string
}


export function Preview(){

    const params = useParams();
    const [data, setData] = useState<DataType | null>(null);
     const { user } = useAuth();
     const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    async function handleRemoveMovie() {
        const movie = await api.get('/notes');
        console.log(movie + 'filme removido');
    }

    useEffect(() =>{
        async function fetchNote(){
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }
        fetchNote();
    },[])
    
    return(
        <Container>
        <Header/>
            <div>
            <Link to='/'>&#129120; Back</Link>
            <ButtonText onClick={handleRemoveMovie} title={'remove movie'}/>
            </div>
            {
                data &&
                <main>
                    <Content>
                        <div className="title_rate">
                            <h1>{data.title}</h1>
                            <Rate rating={data.rating}/>
                        </div>

                        <div className="user_entry">
                            <img src={avatarUrl} alt={`Picture from ${user.name}`} />
                            <p>By {user.name}</p>
                            <img src='../src/assets/timer.svg' alt='timewatch'/> 
                            <p>{data.created_at}</p>
                        </div>

                        <div className="tags">
                            {
                                data.tag &&
                                data.tag.map(tag => <Tag title={tag.title}/>)
                            }
                        </div>

                        <p>{data.description.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>

                    </Content>
                </main> 
            }    
        </Container>
   
    )
}