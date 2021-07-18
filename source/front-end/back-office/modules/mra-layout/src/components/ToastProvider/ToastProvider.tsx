import React, { useCallback, useEffect, Fragment } from "react";
import { toast, ToastOptions, ToastContainer } from "react-toastify";
import Message from "./Message";
import { WindowEvents } from "../../utils";
import "react-toastify/dist/ReactToastify.css";

const configToast: ToastOptions = {
  position: "top-center",
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
      ({ closeToast }) => <Message message={message} onClose={closeToast} />,
      {
        ...configToast,
        type: "error",
      }
    );
  }, []);

  const handleGlobalToastSuccess = useCallback((event: Event) => {
    const { detail: message } = event as CustomEvent;
    toast(
      ({ closeToast }) => <Message message={message} onClose={closeToast} />,
      {
        ...configToast,
        type: "success",
      }
    );
  }, []);

  useEffect(() => {
    window.addEventListener(WindowEvents.TOAST_ERROR, (e) =>
      handleGlobalToastError(e)
    );
    return window.removeEventListener(WindowEvents.TOAST_ERROR, (e) =>
      handleGlobalToastError(e)
    );
  }, [handleGlobalToastError]);

  useEffect(() => {
    window.addEventListener(WindowEvents.TOAST_SUCCESS, (e) =>
      handleGlobalToastSuccess(e)
    );
    return window.removeEventListener(WindowEvents.TOAST_SUCCESS, (e) =>
      handleGlobalToastSuccess(e)
    );
  }, [handleGlobalToastSuccess]);

  return (
    <Fragment>
      <ToastContainer />
    </Fragment>
  );
};

export default ToastProvider;
