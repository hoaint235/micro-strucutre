import { useCallback, useEffect } from 'react';
import { toast, ToastOptions, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WindowEvents } from '@utils';
import { ToastMessage } from '@molecules';

const configToast: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: true,
  closeButton: false,
};

const ToastProvider = () => {
  const handleGlobalToastError = useCallback((event: Event) => {
    const { detail: message } = event as CustomEvent;
    toast(
      ({ closeToast }) => (
        <ToastMessage message={message} onClose={closeToast} />
      ),
      {
        ...configToast,
        type: 'error',
      }
    );
  }, []);

  const handleGlobalToastSuccess = useCallback((event: Event) => {
    const { detail: message } = event as CustomEvent;
    toast(
      ({ closeToast }) => (
        <ToastMessage message={message} onClose={closeToast} />
      ),
      {
        ...configToast,
        type: 'success',
      }
    );
  }, []);

  useEffect(() => {
    window.addEventListener(WindowEvents.TOAST_ERROR, handleGlobalToastError);
    return () =>
      window.removeEventListener(
        WindowEvents.TOAST_ERROR,
        handleGlobalToastError
      );
  }, [handleGlobalToastError]);

  useEffect(() => {
    window.addEventListener(
      WindowEvents.TOAST_SUCCESS,
      handleGlobalToastSuccess
    );
    return () =>
      window.removeEventListener(
        WindowEvents.TOAST_SUCCESS,
        handleGlobalToastSuccess
      );
  }, [handleGlobalToastSuccess]);

  return <ToastContainer />;
};

export default ToastProvider;
