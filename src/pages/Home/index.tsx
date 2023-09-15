import {AllContent, Main, AddMovie, Content} from './styles.ts'
import {Header} from '../../components/Header/index.tsx';
import {Section} from '../../components/Section/index.tsx';
import {FiPlus} from 'react-icons/fi'

import scroll_icon from '../../assets/scroll_icon.svg';


export function Home(){
  return(

    <AllContent>
    <Header />

    <Main>
      <Content $scrollIcon={scroll_icon}>
        <div className='headerAddMovies'>
          <h2>My movies</h2>
          <AddMovie to='/new'>
            <FiPlus className='plusIcon'/>
            <h2>Add movie</h2>
          </AddMovie>
        </div>
          <Section />

         
      </Content>
    </Main>
 </AllContent>
  )
}