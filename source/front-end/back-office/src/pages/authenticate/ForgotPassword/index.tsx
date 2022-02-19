import {
  ForgotPasswordForm,
  ConfirmationPasswordForm,
} from '@components';
import { useStepForm } from '@hooks';
import { ForgotStatus } from '@models';

const ForgotPassword = () => {
  const Component = useStepForm<ForgotStatus>({
    initData: {
      status: 'SEND_ACTIVATION',
    },
    formSteps: {
      SEND_ACTIVATION: ForgotPasswordForm,
      CONFIRMATION_CODE: ConfirmationPasswordForm,
    },
  });

  return Component;
};

export default ForgotPassword;
