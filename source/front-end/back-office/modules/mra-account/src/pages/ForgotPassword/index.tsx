import useStepForm from "../../utils/custom-hooks/useStepForm";
import ConfirmationForm from "./ConfirmationForm";
import SendActivationForm from "./SendActivationForm";

const ForgotPassword = () => {
  const Component = useStepForm<ForgotStatus>({
    initData: {
      status: "SEND_ACTIVATION",
    },
    formSteps: {
      SEND_ACTIVATION: SendActivationForm,
      CONFIRMATION_CODE: ConfirmationForm,
    },
  });

  return Component;
};

export default ForgotPassword;
