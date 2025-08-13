import classes from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary';
}

const Button = (props: ButtonProps) => {
  const { variant = 'default', ...rest } = props;

  return <button className={classes.Button} data-variant={variant} {...rest} />;
};

export default Button;
