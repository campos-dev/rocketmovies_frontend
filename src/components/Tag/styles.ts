import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem 1.6rem;
  margin-right: 0.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.5rem 1.2rem;
  }
`;
