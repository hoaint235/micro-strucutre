import Amplify from "@aws-amplify/auth";
import { WindowEvent } from "../constants";

async function interceptor(callback: Promise<any>) {
  try {
    window.dispatchEvent(new CustomEvent(WindowEvent.INCREASE_LOADING));
    return await callback;
  } catch (error) {
    window.dispatchEvent(
      new CustomEvent(WindowEvent.TOAST_ERROR, { detail: error.code })
    );
    return Promise.reject(error);
  } finally {
    window.dispatchEvent(new CustomEvent(WindowEvent.DECREASE_LOADING));
  }
}

export function initAwsCognito() {
  Amplify.configure({
    mandatorySignIn: true,
    region: process.env.AWS_COGNITO_REGION,
    userPoolId: process.env.AWS_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.AWS_COGNITO_CLIENT_ID,
  });
}

export async function getAccessToken() {
  try {
    const session = await Amplify.currentSession();
    return session.getIdToken().getJwtToken();
  } catch (error) {}
  return "";
}

export async function isAuthenticated() {
  try {
    await Amplify.currentSession();
  } catch (error) {
    return false;
  }
  return true;
}

export const Cognito = {
  async signIn(
    userName: string,
    password: string,
    clientMedata?: ClientMedata
  ): Promise<any> {
    return await interceptor(Amplify.signIn(userName, password, clientMedata));
  },
  async completeNewPassword(
    user: any,
    password: string,
    requiredAttributes?: any,
    clientMedata?: ClientMedata
  ): Promise<any> {
    return await interceptor(
      Amplify.completeNewPassword(
        user,
        password,
        requiredAttributes,
        clientMedata
      )
    );
  },
  async forgotPassword(
    userName: string,
    clientMedata?: ClientMedata
  ): Promise<any> {
    return await interceptor(Amplify.forgotPassword(userName, clientMedata));
  },
  async forgotPasswordSubmit(
    userName: string,
    code: string,
    password: string,
    clientMedata?: ClientMedata
  ): Promise<any> {
    return await interceptor(
      Amplify.forgotPasswordSubmit(userName, code, password, clientMedata)
    );
  },
  async confirmMFACode(
    user: any,
    code: string,
    clientMedata?: ClientMedata
  ): Promise<any> {
    return await interceptor(
      Amplify.confirmSignIn(user, code, "SMS_MFA", clientMedata)
    );
  },
  async signOut(global?: boolean): Promise<any> {
    return await interceptor(Amplify.signOut({ global: global }));
  },
};
