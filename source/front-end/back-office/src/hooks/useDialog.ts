import { DialogContext } from '@contexts';
import { useContext } from 'react';

const useDialog = () => useContext(DialogContext);
export default useDialog;
