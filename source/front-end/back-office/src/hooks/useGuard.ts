import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { cognitoService } from '../services';
import { Pages } from '../utils';

const useGuard = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const history = useHistory();

  const checkAuthenticated = async () => {
    const authenticated = await cognitoService.isAuthenticated();
    setIsAuth(authenticated);
    if (!authenticated) {
      history.push(Pages.SIGN_IN);
    }
  };

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuth };
};

export default useGuard;
