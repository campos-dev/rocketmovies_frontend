import styled from 'styled-components';
import backgroundImg from '../../assets/Theater.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 13.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

        >Input{
        align-items: center;
    }

    >h1{
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.PINK};

    }

    >h2{
        font-size: 2.4rem;
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
    }

    >p{
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    >a{
        margin-top: 4.2rem;
        color: ${({theme}) => theme.COLORS.PINK};

        text-align:center;
    }
`;

export const Background = styled.div`
    flex:1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;