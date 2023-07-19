import styled from 'styled-components';

export const Container = styled.header`
    grid-area:'header';

    height: 105px;
    width:100%;

    border-bottom: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 80px;

    >h1{
        font-size:2.4rem;
        color: ${({theme}) => theme.COLORS.PINK}
    }
    
`

export const Profile = styled.div`
    display:flex;
    align-items: center;

    >img{
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_700}
    }

    >div{
        display: flex;
        flex-direction: column;
        align-items: end;

        margin-right: 1.6rem;
        line-height: 2.4rem;

        span{
            font-size: 1.4rem;
            color:${({theme}) => theme.COLORS.GRAY_300};
        }

        strong{
            font-size: 1.8rem;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`