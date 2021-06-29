const stringHelper = {
  generateCognitoError(code: string): string {
    if (!code) {
      return code;
    }

    return `errors.cognito.${code.charAt(0).toLowerCase()}${code.slice(
      1
    )}Error`;
  },
};

export default stringHelper;
