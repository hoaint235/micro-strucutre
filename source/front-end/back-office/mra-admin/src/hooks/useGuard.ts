import { useEffect, useState } from "react";
import { CognitoService } from "../services";

const useGuard = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const checkAuthenticated = async () => {
    const authenticated = await CognitoService.isAuthenticated();
    setIsAuth(authenticated);
  };

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuth };
};

export default useGuard;
