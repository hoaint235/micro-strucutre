import React, { useState, useCallback, Fragment } from "react";
import ConfirmContext, { ContextProps } from "./ConfirmContext";
import { ConfirmationDialog, ConfirmationOptionsProps } from "../../molecules";

const DEFAULT_OPTIONS: ConfirmationOptionsProps = {
  title: "",
  description: "",
  confirmationText: "buttons.confirm",
  cancellationText: "buttons.cancel",
  dialogProps: {},
  confirmationButtonProps: {},
  cancellationButtonProps: {},
};

type Props = {
  children: React.ReactNode;
  options?: ConfirmationOptionsProps;
};

const ConfirmProvider = (props: Props) => {
  const { children, options } = props;
  const [defaultOptions, setOptions] =
    useState<ConfirmationOptionsProps>({...DEFAULT_OPTIONS, ...options});
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
    setOptions({ ...defaultOptions, title, description, ...options });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = useCallback(() => setResolveReject([]), []);
  const handleOnClick = useCallback(
    (callback?: Function) => {
      try {
        callback && callback();
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
    <Fragment>
      <ConfirmContext.Provider value={confirm}>
        {children}
      </ConfirmContext.Provider>
      <ConfirmationDialog
        open={resolveReject.length === 2}
        options={defaultOptions}
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Fragment>
  );
};

export default ConfirmProvider;
