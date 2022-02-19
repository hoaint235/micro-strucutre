import { useContext } from 'react';
import { ConfirmContext } from '@components';

const useConfirm = () => {
  const confirm = useContext(ConfirmContext);
  return confirm;
};

export default useConfirm;
