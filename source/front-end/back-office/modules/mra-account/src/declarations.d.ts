declare module "@mra/utility" {
  type ClientMedata = { [key: string]: string };
  type AwsCognito = {
    signIn(
      userName: string,
      password: string,
      clientMedata?: ClientMedata
    ): Promise<any>;
    completeNewPassword(
      user: any,
      password: string,
      requiredAttributes?: any,
      clientMedata?: ClientMedata
    ): Promise<any>;
    forgotPassword(userName: string, clientMedata?: ClientMedata): Promise<any>;
    forgotPasswordSubmit(
      userName: string,
      code: string,
      password: string,
      clientMedata?: ClientMedata
    ): Promise<any>;
  };

  export function t(key: string, options?): string;
  export const API: any;
  export const Cognito: AwsCognito;
}

declare type PartialRecord<K extends string | number | symbol, T> = {
  [P in K]?: T;
};
declare type ExtendProps = {
  [element: string]: any;
};

declare type StateLocation = ExtendProps;

declare type StepProps<TStatus> = {
  status?: TStatus;
  data?: ExtendProps;
};
declare type HandleStepProps<TStatus> = {
  stepObj?: StepProps<TStatus>;
  onNavigateStep?: (obj: StepProps<TStatus>) => void;
};

declare type SignInStatus = "NO_LOGIN" | "FIRST_LOGIN";
declare type ForgotStatus = "SEND_ACTIVATION" | "CONFIRMATION_CODE";

declare interface Certificate {
  email: string;
  password: string;
}
