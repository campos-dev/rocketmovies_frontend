import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 14.4rem;

  background: ${({ theme }) => theme.COLORS.PINK_BG};

  display: flex;
  align-items: center;

  padding: 0 12.4rem;

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  @media (max-width: 800px) {
    padding: 0 5rem;

    a {
      font-size: 1.4rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 60rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.5rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 1rem;
    right: 1rem;

    border-radius: 50%;

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

  @media (max-width: 800px) {
    width: 14rem;
    height: 14rem;

    > img {
      width: 14rem;
      height: 14rem;
    }

    > label {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;
