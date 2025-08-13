import classes from './FieldHelperText.module.scss';

const FieldHelperText = (props: React.PropsWithChildren) => {
  const { children } = props;

  return <span className={classes.HelperText}>{children}</span>;
};

export default FieldHelperText;
