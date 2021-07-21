const stringHelper = {
  generateCognitoError(code: string): string {
    if (!code) {
      return code;
    }

    return `errors.cognito.${code.charAt(0).toLowerCase()}${code.slice(
      1
    )}Error`;
  },
  upperFirst(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
};

export default stringHelper;
