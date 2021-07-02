import React, { useCallback, useEffect, Fragment } from "react";
import { toast, ToastOptions, ToastContainer } from "react-toastify";
import { WindowEvents } from "../../utils";
import "react-toastify/dist/ReactToastify.css";
import Message from "./Message";

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
    const { detail: translation } = event as CustomEvent;
    toast(
      ({ closeToast }) => (
        <Message message={translation} onClose={closeToast} />
      ),
      {
        ...configToast,
        type: "error",
      }
    );
  }, []);

  const handleGlobalToastSucces = useCallback((event: Event) => {
    const { detail: translation } = event as CustomEvent;
    toast(
      ({ closeToast }) => (
        <Message message={translation} onClose={closeToast} />
      ),
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
      handleGlobalToastSucces(e)
    );
    return window.removeEventListener(WindowEvents.TOAST_SUCCESS, (e) =>
      handleGlobalToastSucces(e)
    );
  }, [handleGlobalToastSucces]);

  return (
    <Fragment>
      <ToastContainer />
    </Fragment>
  );
};

export default ToastProvider;
