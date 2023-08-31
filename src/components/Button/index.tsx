import { Container } from './styles';

interface ButtonProps {
  children: JSX.Element | JSX.Element[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({children, onClick}: ButtonProps) {
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}