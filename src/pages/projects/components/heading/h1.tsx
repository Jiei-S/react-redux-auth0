type Props = {
  text: string;
};

export const Heading1 = ({ text }: Props): JSX.Element => {
  return <h1>{text}</h1>;
};
