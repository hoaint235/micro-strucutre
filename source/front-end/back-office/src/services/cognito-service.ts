import Amplify from '@aws-amplify/auth';
import { WindowEvents } from '@utils';

async function interceptor(callback: Promise<any>) {
  try {
    window.dispatchEvent(new CustomEvent(WindowEvents.INCREASE_LOADING));
    return await callback;
  } catch (error: any) {
    window.dispatchEvent(
      new CustomEvent(WindowEvents.TOAST_ERROR, { detail: error.code })
    );
    return Promise.reject(error);
  } finally {
    window.dispatchEvent(new CustomEvent(WindowEvents.DECREASE_LOADING));
  }
}

const CognitoService = {
  initialize() {
    Amplify.configure({
      mandatorySignIn: true,
      region: process.env.REACT_APP_AWS_COGNITO_REGION,
      userPoolId: process.env.REACT_APP_AWS_COGNITO_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
    });
  },
  async getAccessToken() {
    try {
      const session = await Amplify.currentSession();
      return session.getIdToken().getJwtToken();
    } catch (error) {}
    return '';
  },
  async isAuthenticated() {
    try {
      await Amplify.currentAuthenticatedUser();
    } catch (error) {
      return false;
    }
    return true;
  },
  async signIn(
    userName: string,
    password: string,
    clientMetadata?: ClientMetadata
  ): Promise<any> {
    return await interceptor(
      Amplify.signIn(userName, password, clientMetadata)
    );
  },
  async completeNewPassword(
    user: any,
    password: string,
    requiredAttributes?: any,
    clientMetadata?: ClientMetadata
  ): Promise<any> {
    return await interceptor(
      Amplify.completeNewPassword(
        user,
        password,
        requiredAttributes,
        clientMetadata
      )
    );
  },
  async forgotPassword(
    userName: string,
    clientMetadata?: ClientMetadata
  ): Promise<any> {
    return await interceptor(Amplify.forgotPassword(userName, clientMetadata));
  },
  async forgotPasswordSubmit(
    userName: string,
    code: string,
    password: string,
    clientMetadata?: ClientMetadata
  ): Promise<any> {
    return await interceptor(
      Amplify.forgotPasswordSubmit(userName, code, password, clientMetadata)
    );
  },
  async confirmMFACode(
    user: any,
    code: string,
    clientMetadata?: ClientMetadata
  ): Promise<any> {
    return await interceptor(
      Amplify.confirmSignIn(user, code, 'SMS_MFA', clientMetadata)
    );
  },
  async signOut(global?: boolean): Promise<any> {
    return await interceptor(Amplify.signOut({ global }));
  },
};

export default CognitoService;
