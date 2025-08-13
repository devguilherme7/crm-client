import classes from './FieldLabel.module.scss';
import { useFieldRootContext } from './FieldRootContext';

const FieldLabel = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  const { onMouseDown, ...rest } = props;

  const { inputId } = useFieldRootContext();

  const handleMouseDown = (event: React.MouseEvent<HTMLLabelElement>) => {
    // Prevent text selection on double click
    if (!event.defaultPrevented && event.detail > 1) {
      event.preventDefault();
    }

    onMouseDown?.(event);
  };

  return (
    <label htmlFor={inputId} className={classes.Label} onMouseDown={handleMouseDown} {...rest} />
  );
};

export default FieldLabel;
