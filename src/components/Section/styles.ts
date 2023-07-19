import styled from 'styled-components';

export const Container = styled.section`

    height: 23.5rem;
    padding:3.2rem;
    margin-bottom: 2.4rem;


    display:flex;
    flex-direction: column;
    justify-content: center;
    
    background-color: ${({theme}) => theme.COLORS.PINK_BG};
    border-radius:1.6rem;



    h2{
        font-size: 2.4rem;
        font-weight: 700;

        margin-bottom:.5rem;
    }

    .rate{
    
        margin-bottom:1rem;
   
        >svg{
            width:1.2rem;
            height: 1.2rem;
            margin-right:6px;
        }
    }

    p{
        font-size: 1.4rem;
        margin-bottom:2.5rem;
        color:${({theme}) => theme.COLORS.GRAY_300};

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
`