import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:5.6rem;
    margin:.5rem 0;
    padding-left:1rem;

    border-radius:1rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    display:flex;
    align-items: center;

    >input{
    width:100%;
    height:100%;
    padding-left:1rem;

    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`