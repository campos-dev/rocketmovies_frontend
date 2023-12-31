import timer from '../../assets/timer.svg';
import scroll_icon from '../../assets/scroll_icon.svg';

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

import { Link, useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();
    const params = useParams();
    const [data, setData] = useState<DataType | null>(null);
    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    async function handleRemoveMovie() {
       const confirm = window.confirm('Do you want to remove this movie?');
       if(confirm){
        await api.delete(`/notes/${params.id}`);
        navigate(-1);
       }
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
                    <Content $scrollIcon={scroll_icon}>
                        <div className="title_rate">
                            <h1>{data.title}</h1>
                            <Rate rating={data.rating}/>
                        </div>

                        <div className="user_entry">
                            <img src={avatarUrl} alt={`Picture from ${user.name}`} />
                            <p>By {user.name}</p>
                            <img src={timer} alt='timewatch'/> 
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