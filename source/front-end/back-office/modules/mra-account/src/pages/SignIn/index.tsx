import useStepForm from "../../utils/custom-hooks/useStepForm";
import ChangeFirstTimePasswordForm from "./ChangePasswordFirstTimeForm";
import SignInForm from "./SignInForm";
import VerifySMSForm from "./VerifySMSForm";

const SignIn = () => {
  const Component = useStepForm<SignInStatus>({
    initData: {
      status: "NO_LOGIN",
    },
    formSteps: {
      NO_LOGIN: SignInForm,
      FIRST_LOGIN: ChangeFirstTimePasswordForm,
      VERIFY_CODE: VerifySMSForm,
    },
  });

  return Component;
};

export default SignIn;
