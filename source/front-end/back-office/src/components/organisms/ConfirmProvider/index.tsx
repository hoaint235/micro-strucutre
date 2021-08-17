import React, { useState, useCallback, Fragment } from 'react';
import ConfirmContext, { ContextProps } from './ConfirmContext';
import {
  ConfirmationDialog,
  ConfirmationOptionsProps,
  InformationConfirmationProps,
} from '../../molecules';

const DEFAULT_OPTIONS: ConfirmationOptionsProps = {
  confirmationText: 'buttons.confirm',
  cancellationText: 'buttons.cancel',
  dialogProps: {},
  confirmationButtonProps: { color: 'secondary' },
  cancellationButtonProps: {},
};

type Props = {
  children: React.ReactNode;
  options?: ConfirmationOptionsProps;
};

const ConfirmProvider = (props: Props) => {
  const { children, options } = props;
  const [defaultOptions, setOptions] = useState<ConfirmationOptionsProps>({
    ...DEFAULT_OPTIONS,
    ...options,
  });
  const [information, setInformation] = useState<InformationConfirmationProps>({
    title: '',
    description: '',
  });
  const [resolveReject, setResolveReject] = useState<(Function | undefined)[]>(
    []
  );
  const [resolve, reject] = resolveReject;

  const confirm = useCallback((props: ContextProps) => {
    const {
      title,
      description,
      onSubmit,
      onBeforeCancel = () => {},
      options = {},
    } = props;
    setResolveReject([onSubmit, onBeforeCancel]);
    setOptions({ ...defaultOptions, ...options });
    setInformation({ title, description });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = useCallback(() => setResolveReject([]), []);
  const handleOnClick = useCallback(
    async (callback?: Function) => {
      try {
        callback && (await callback());
        handleClose();
      } catch (error) {
        throw new Error(error);
      }
    },
    [handleClose]
  );

  const handleCancel = useCallback(() => {
    handleOnClick(reject);
  }, [reject, handleOnClick]);

  const handleConfirm = useCallback(() => {
    handleOnClick(resolve);
  }, [resolve, handleOnClick]);

  return (
    <>
      <ConfirmContext.Provider value={confirm}>
        {children}
      </ConfirmContext.Provider>
      <ConfirmationDialog
        info={information}
        open={resolveReject.length === 2}
        options={defaultOptions}
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default ConfirmProvider;
