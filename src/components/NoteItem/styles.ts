import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isNew: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 1rem;

  margin: 0.5rem 1rem;

  > input {
    display: flex;
    align-items: center;
    gap: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 1.2rem;
  }

  > button {
    display: flex;
    align-items: center;
    gap: 0;

    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    padding-right: 1.6rem;
  }

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
