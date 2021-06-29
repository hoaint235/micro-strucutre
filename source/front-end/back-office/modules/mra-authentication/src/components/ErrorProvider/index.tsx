import { Box } from "@material-ui/core";
import React, { useCallback, useEffect, Fragment, useState } from "react";
import { ErrorMessage } from "..";
import { stringHelper } from "../../utils";
import { WindowEvent } from "../../utils/constants";

const ErrorProvider = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleGlobalToastError = useCallback((event: Event) => {
    const { detail } = event as CustomEvent;
    setErrorMessage(stringHelper.generateCognitoError(detail));
  }, []);

  useEffect(() => {
    window.addEventListener(WindowEvent.TOAST_ERROR, (e) =>
      handleGlobalToastError(e)
    );

    return window.removeEventListener(WindowEvent.TOAST_ERROR, (e) =>
      handleGlobalToastError(e)
    );
  }, [handleGlobalToastError]);

  return (
    <Fragment>
      {!!errorMessage && (
        <Box mb={2}>
          <ErrorMessage
            message={errorMessage}
            onClose={() => setErrorMessage("")}
          />
        </Box>
      )}
    </Fragment>
  );
};

export default ErrorProvider;
