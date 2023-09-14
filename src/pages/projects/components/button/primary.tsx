type Props = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: Props): JSX.Element => {
  return <button onClick={onClick}>{text}</button>;
};
