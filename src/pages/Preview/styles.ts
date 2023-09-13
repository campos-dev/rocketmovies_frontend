import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  overflow: hidden;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 8rem 2.4rem;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    > button {
      padding-right: 3rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
    }
  }

  > main {
    padding: 0 8rem;

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
    /* margin-top: 11.5rem; */
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-image: url("../../../src/assets/scroll_icon.svg");
    background-repeat: no-repeat;
  }

  /*********firefox scrollbar  *******/
  scrollbar-width: thin;
  scrollbar-color: #ff859b #333;

  .title_rate {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 14rem;
    }
  }

  .user_entry {
    margin-top: 2.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > img:nth-child(1) {
      width: 1.8rem;
      height: 1.8rem;

      border-radius: 50%;
      border: 2px solid #3e3b47;
    }

    > img:nth-child(2) {
      width: 1.6rem;
    }

    p {
      margin: 0;

      font-weight: 400;
      font-size: 1.6rem;
    }
  }

  .tags {
    margin-top: 2.4rem;
    display: flex;
    flex-wrap: wrap;

    > span {
      margin-bottom: 2.4rem;
    }
  }

  p {
    margin: 0;

    text-align: justify;
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 15rem;
  }
`;
