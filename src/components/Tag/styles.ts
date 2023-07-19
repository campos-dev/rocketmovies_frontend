import styled from 'styled-components';

export const Container = styled.span`
    font-size:1.2rem;
    padding:.5rem 1.6rem;
    margin-right: .8rem;
    
    border-radius:.8rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
`