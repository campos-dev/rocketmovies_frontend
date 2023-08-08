import styled from "styled-components";

export const Container = styled.section`
  height: 23.5rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.PINK_BG};
  border-radius: 1.6rem;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;

    margin-bottom: 0.5rem;
  }

  .rate {
    margin-bottom: 1.5rem;

    > .hide {
      display: none;
    }

    img {
      width: 8.4rem;
      height: 1.2rem;
      margin-right: 6px;
    }
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 800px) {
    height: 20rem;
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
