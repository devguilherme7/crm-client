import { createContext, useContext } from 'react';

export interface FieldRootContextValue {
  invalid: boolean;
  inputId?: string;
  setInputId?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const FieldRootContext = createContext<FieldRootContextValue | undefined>(undefined);

export function useFieldRootContext(optional: boolean = false): FieldRootContextValue {
  const ctx = useContext(FieldRootContext);
  if (!ctx && !optional) {
    throw new Error('useFieldRootContext must be used within a FieldRoot');
  }
  return ctx!;
}
