import styled from "styled-components";

export const Container = styled.header`
  grid-area: "header";

  height: 105px;
  width: 100%;

  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 6.4rem;
  }

  select {
    margin-right: 1rem;
    border: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    outline: none;
  }

  select:focus option {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  #ratingContainer {
    border-radius: 0.5rem;
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
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  button {
    margin-right: 1rem;
  }

  #tagsContainer {
    overflow: auto;
    max-height: 5.5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    /*****************    scrollbar webkit   ************/

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-button {
      background-color: transparent;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      /* height: 100%; */
    }

    &::-webkit-scrollbar-thumb:vertical {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      height: 1rem;
      cursor: pointer;
    }

    /*********firefox scrollbar  *******/
    scrollbar-width: thin;
    scrollbar-color: #ff859b #333;
  }

  #tagsContainer > button {
    padding: 2rem 1rem;
  }

  @media (max-width: 900px) {
    padding: 0 1rem;
    > h1 {
      font-size: 1.4rem;
      margin-right: 1rem;
    }
    select {
      margin-right: 0.5rem;
      font-size: 1rem;
    }
    #ratingContainer {
      max-height: 6rem;
      overflow: auto;
      > label {
        font-size: 1rem;
      }
    }
    #tagsContainer > button {
      font-size: 1.2rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;

  > a > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    margin-right: 1.6rem;
    line-height: 2.4rem;

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
      white-space: nowrap;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (max-width: 800px) {
    margin-left: 1rem;

    > a > img {
      width: 4.6rem;
      height: 4.6rem;
    }

    > div {
      margin-right: 1rem;
      line-height: 1.8rem;
      a {
        font-size: 1.4rem;
      }

      strong {
        font-size: 1.2rem;
      }
    }
  }
`;
