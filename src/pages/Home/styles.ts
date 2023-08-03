import styled from "styled-components";

export const AllContent = styled.body`
  height: 100vh;
  overflow: hidden;
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 10.5rem);

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  max-width: 122rem;
  height: calc(100vh - (10.5rem + 5rem));
  margin: 5rem auto;
  padding-right: 0.5rem;

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
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
      font-size: 3.2rem;
    }

    > button {
      font-size: 1rem;

      max-width: 16rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      .plusIcon {
        font-size: 2rem;
      }
    }
  }
`;
