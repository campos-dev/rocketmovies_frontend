import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content"
`;

export const Form = styled.form`
    padding:0 8rem;
    margin:3.8rem auto;

    a{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    h1{
        margin-top: 2.4rem;
        font-size: 3.6rem;
    }

    h2{
        margin-top: 4rem;
        font-size: 2rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

    .title_rating{
        margin:4rem 0;

        display:flex;
        align-items: center;
        white-space:nowrap;


        >fieldset{
            border-radius:.5rem;
            padding: .7rem 1rem;
            align-self:flex-start;

            margin-left: 3rem;
            color:${({theme}) => theme.COLORS.PINK};

            >input{
                margin-left:1.5rem;
            }

            input[type='radio'] {
                accent-color: ${({theme}) => theme.COLORS.PINK};
                cursor:pointer;
            }


            >label{
                    margin-left: .5rem;
                    color: ${({theme}) => theme.COLORS.GRAY_300};
                }
        
        }
    }

    .tagsContainer{
        width: 100%;
        min-height:8rem;

        display: flex;
        align-items: center;
        flex-wrap:wrap;

        padding:1.6rem;
        margin-top: 2.4rem;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        border-radius: .8rem;
    }
`;
