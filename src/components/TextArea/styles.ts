import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height:15rem;

    border: none;
    resize:none;

    border-radius:1rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    padding:1rem 2rem;
    margin-bottom:.8rem;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`;