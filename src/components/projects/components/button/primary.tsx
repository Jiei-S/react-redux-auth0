type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Props): JSX.Element => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
