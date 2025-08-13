import { FieldRootContext, type FieldRootContextValue } from './FieldRootContext';
import { useMemo, useState } from 'react';

import classes from './FieldRoot.module.scss';

interface FieldRootProps {
  children: React.ReactNode;
  invalid?: boolean;
}

const FieldRoot = (props: FieldRootProps) => {
  const { invalid = false, children } = props;

  const [inputId, setInputId] = useState<string | undefined>(undefined);

  const contextValue = useMemo<FieldRootContextValue>(
    () => ({
      invalid,
      inputId,
      setInputId,
    }),
    [inputId, invalid]
  );

  return (
    <FieldRootContext.Provider value={contextValue}>
      <div className={classes.FieldRoot}>{children}</div>
    </FieldRootContext.Provider>
  );
};

export default FieldRoot;
