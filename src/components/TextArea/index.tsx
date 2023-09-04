import { Container } from './styles.ts';


interface TextAreaProps {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ placeholder, onChange, value }) => {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};