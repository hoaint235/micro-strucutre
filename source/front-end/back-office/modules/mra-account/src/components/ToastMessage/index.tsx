import React, { useCallback, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError } from "../../utils/helpers/toastHelper";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = () => {
  const handleGlobalToastError = useCallback((event: Event) => {
    const { detail } = event as CustomEvent;
    showError(detail);
  }, []);

  useEffect(() => {
    window.addEventListener("TOAST_ERROR", (e) => handleGlobalToastError(e));

    return window.removeEventListener("TOAST_ERROR", (e) =>
      handleGlobalToastError(e)
    );
  }, [handleGlobalToastError]);

  return <ToastContainer />;
};

export default ToastMessage;
