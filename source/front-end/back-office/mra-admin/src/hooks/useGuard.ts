import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { CognitoService } from "../services";

const useGuard = () => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const checkAuthenticated = async () => {
    const authenticated = await CognitoService.isAuthenticated();
    setIsAuth(authenticated);
    if (!authenticated) {
      history.push("/sign-in");
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
