import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $isnew: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 1rem;

  margin: 0.5rem 1rem;

  > input {
    max-width: 13rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: transparent;
    border: none;

    padding: 1.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    display: flex;
    align-items: center;

    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    padding-right: 0.8rem;
  }

  @media (max-width: 800px) {
    > input {
      max-width: 8rem;
      font-size: 1.2rem;

      padding: 1rem;

      &::placeholder {
        font-size: 1.2rem;
      }
    }
  }
`;
