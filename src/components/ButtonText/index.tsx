import { Container } from './styles';
import theme from '../../styles/theme'

interface ButtonTextProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export function ButtonText({ title, onClick, isActive =false, ...rest }: ButtonTextProps) {

    const activeStyles = {
    color: theme.COLORS.PINK,
  };

  return (
    <Container type="button" 
    style={isActive ? activeStyles : {}}
    onClick={onClick}
    {...rest}>
      {title}
    </Container>
  );
}