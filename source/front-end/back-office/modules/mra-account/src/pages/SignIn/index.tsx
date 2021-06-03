import useStepForm from "../../utils/custom-hooks/useStepForm";
import ChangeFirstTimePasswordForm from "./ChangePasswordFirstTimeForm";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const Component = useStepForm<SignInStatus>({
    initData: {
      status: "NO_LOGIN",
    },
    formSteps: {
      NO_LOGIN: SignInForm,
      FIRST_LOGIN: ChangeFirstTimePasswordForm,
    },
  });

  return Component;
};

export default SignIn;
