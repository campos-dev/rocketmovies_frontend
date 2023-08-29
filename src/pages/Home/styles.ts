import { Link } from "react-router-dom";
import styled from "styled-components";

export const AllContent = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 10.5rem);
  padding: 0 8rem;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const AddMovie = styled(Link)`
  font-size: 1rem;
  max-width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  @media (max-width: 800px) {
    white-space: nowrap;
    font-size: 0.7rem;
    max-width: 10rem;
    height: 3.6rem;
    gap: 0.5rem;
  }
`;

export const Content = styled.div`
  max-width: 122rem;
  height: calc(100vh - (10.5rem + 5rem));
  margin: 5rem auto;
  padding: 0 1rem;

  overflow: auto;

  /*****************    scrollbar webkit   ************/

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    margin-top: 11.5rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-image: url("../../../src/assets/scroll_icon.svg");
    background-repeat: no-repeat;
  }

  /*********firefox scrollbar  *******/
  scrollbar-width: thin;
  scrollbar-color: #ff859b #333;

  > .headerAddMovies {
    margin-top: 1.6rem;
    margin-bottom: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
      font-size: 3.2rem;
    }

    .plusIcon {
      font-size: 2rem;
    }
  }

  @media (max-width: 800px) {
    &::-webkit-scrollbar-track {
      margin-top: 10rem;
    }
    padding: 0 0.5rem;
    margin: 0 0.5rem;

    > .headerAddMovies {
      > h2 {
        font-size: 2.2rem;
      }

      .plusIcon {
        font-size: 1.4rem;
      }
    }
  }
`;
