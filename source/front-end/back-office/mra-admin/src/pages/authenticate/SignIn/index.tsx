import {
  SignInForm,
  ChangePasswordFirstTimeForm,
  VerifySMSForm,
} from "../../../components";
import { useStepForm } from "../../../hooks";
import { SignInStatus } from "../../../models";

const SignIn = () => {
  const Component = useStepForm<SignInStatus>({
    initData: {
      status: "NO_LOGIN",
    },
    formSteps: {
      NO_LOGIN: SignInForm,
      FIRST_LOGIN: ChangePasswordFirstTimeForm,
      VERIFY_CODE: VerifySMSForm,
    },
  });

  return Component;
};

export default SignIn;
