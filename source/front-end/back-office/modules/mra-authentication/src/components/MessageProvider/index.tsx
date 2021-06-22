import React, { useCallback, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MessageProvider = () => {
  const handleGlobalToastError = useCallback((event: Event) => {
    const { detail } = event as CustomEvent;
    // showError(detail);
  }, []);

  useEffect(() => {
    window.addEventListener("TOAST_ERROR", (e) => handleGlobalToastError(e));

    return window.removeEventListener("TOAST_ERROR", (e) =>
      handleGlobalToastError(e)
    );
  }, [handleGlobalToastError]);

  return <ToastContainer />;
};

export default MessageProvider;
