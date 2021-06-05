import Amplify from "@aws-amplify/auth";

export function initAwsCognito() {
  Amplify.configure({
    mandatorySignIn: true,
    region: "ap-southeast-1",
    userPoolId: "ap-southeast-1_InSBJsh14",
    userPoolWebClientId: "55g1k9f78rh6nh8a6absi19h5b",
  });
}

export const Cognito = Amplify;
