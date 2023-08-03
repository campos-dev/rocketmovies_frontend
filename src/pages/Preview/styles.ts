import styled from "styled-components";

export const Container = styled.div`
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
`;

export const Content = styled.div`
  max-width: 122rem;
  height: calc(100vh - (10.5rem + 5rem));
  padding-right: 1rem;

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

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
