import Amplify from "@aws-amplify/auth";

export function initAwsCognito() {
  Amplify.configure({
    mandatorySignIn: true,
    region: process.env.AWS_COGNITO_REGION,
    userPoolId: process.env.AWS_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.AWS_COGNITO_CLIENT_ID,
  });
}

export const Cognito = Amplify;
