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
`;
