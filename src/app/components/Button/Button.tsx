type Props = {
  title: string;
};

const Button = (props: Props) => {
  return <div>{props.title}</div>;
};

export default Button;
