import { Box } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import { stringHelper, WindowEvents } from '@utils';
import { ErrorMessage } from '@molecules';

const ErrorProvider = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleGlobalToastError = useCallback((event: Event) => {
    const { detail } = event as CustomEvent;
    setErrorMessage(stringHelper.generateCognitoError(detail));
  }, []);

  useEffect(() => {
    window.addEventListener(WindowEvents.TOAST_ERROR, (e) =>
      handleGlobalToastError(e)
    );

    return window.removeEventListener(WindowEvents.TOAST_ERROR, (e) =>
      handleGlobalToastError(e)
    );
  }, [handleGlobalToastError]);

  return (
    <>
      {!!errorMessage && (
        <Box mb={2}>
          <ErrorMessage
            message={errorMessage}
            onClose={() => setErrorMessage('')}
          />
        </Box>
      )}
    </>
  );
};

export default ErrorProvider;
