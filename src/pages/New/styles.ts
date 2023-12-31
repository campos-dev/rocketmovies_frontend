import styled from "styled-components";

type ContentProps = {
  $scrollIcon: string;
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  > main {
    padding: 0 8rem;
    margin: 3.8rem auto;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
      "header"
      "content";
  }

  @media (max-width: 800px) {
    > main {
      margin: 2rem auto;
      padding: 0 1rem;
    }
  }
`;

export const Form = styled.form<ContentProps>`
  max-width: 122rem;
  height: calc(100vh - (10.5rem + 10rem));
  padding-right: 1rem;

  overflow: auto;

  /*****************    scrollbar webkit   ************/

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    margin-top: 14rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-image: url(${(props) => props.$scrollIcon});
    background-repeat: no-repeat;
  }

  /*********firefox scrollbar  *******/
  scrollbar-width: thin;
  scrollbar-color: #ff859b #333;

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  h1 {
    margin-top: 2.4rem;
    font-size: 3.6rem;
  }

  h2 {
    margin-top: 4rem;
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .title_rating {
    margin: 4rem 0;

    display: flex;
    align-items: center;
    white-space: nowrap;

    > fieldset {
      border-radius: 0.5rem;
      padding: 0.7rem 1rem;
      align-self: flex-start;

      margin-left: 3rem;
      color: ${({ theme }) => theme.COLORS.PINK};

      > input {
        margin-left: 1.5rem;
      }

      input[type="radio"] {
        accent-color: ${({ theme }) => theme.COLORS.PINK};
        cursor: pointer;
      }

      > label {
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }

  .tagsContainer {
    width: 100%;
    min-height: 8rem;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    padding: 1.6rem;
    margin-top: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 0.8rem;
  }

  .buttonsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    margin-top: 4rem;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.COLORS.PINK};

      > h2 {
        margin: 0;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 800px) {
    &::-webkit-scrollbar-track {
      margin-top: 11rem;
    }
    a {
      font-size: 1.4rem;
    }
    h1 {
      margin-top: 2rem;
      font-size: 2rem;
    }

    h2 {
      margin-top: 1rem;
      font-size: 1.6rem;
    }

    .title_rating {
      margin: 4rem 0;
      display: block;

      > fieldset {
        font-size: 1.2rem;
        margin: 1rem auto 0;
        text-align: center;
      }
    }
    .tagsContainer {
      min-height: 4rem;

      padding: 1rem;
      margin-top: 1rem;
    }

    .buttonsContainer {
      margin-top: 1rem;

      > button {
        > h2 {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
