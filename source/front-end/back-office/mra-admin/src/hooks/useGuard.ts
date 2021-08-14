import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CognitoService } from "../services";
import { Pages } from "../utils";

const useGuard = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const history = useHistory();

  const checkAuthenticated = async () => {
    const authenticated = await CognitoService.isAuthenticated();
    setIsAuth(authenticated);
    if (!authenticated) {
      history.push(Pages.SIGN_IN);
      return;
    }
  };

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuth };
};

export default useGuard;
