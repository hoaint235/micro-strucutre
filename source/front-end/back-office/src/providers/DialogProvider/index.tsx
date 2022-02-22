import { ConfirmationDialog, ConfirmationOptionsProps } from '@components';
import React, { useState, useCallback, Fragment, ReactNode } from 'react';
import { DialogContext, DialogResult } from '@contexts';

const DialogProvider = (props: any) => {
  const { children } = props;
  const [component, setComponent] = useState<ReactNode | null>(null);

  const show = useCallback(async (Component: any, props: any) => {
    if (!Component) {
      throw new Error('Component is required');
    }

    return new Promise<DialogResult>((resolve) => {
      const onClose = (result: DialogResult) => {
        setComponent(null);
        resolve(result || { success: false });
      };
      const newProps = { ...props, onClose, open: true } || {};
      const newComponent = React.createElement((<Component />).type, newProps);
      setComponent(newComponent);
    });
  }, []);

  const confirm = useCallback((title: string, message: string, options: ConfirmationOptionsProps = {}) => {
    return show(ConfirmationDialog, {
      title,
      description: message,
      options
    });
  }, [show]);

  return (
    <Fragment>
      <DialogContext.Provider value={{ show, confirm }}>
        {children}
      </DialogContext.Provider>
      {component}
    </Fragment>
  );
};

export default DialogProvider;
