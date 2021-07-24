import { Regex } from "../constants";

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
  toCurrency(value: number | string): string {
    return value.toString().replace(Regex.currency, "$1,");
  },
};

export default stringHelper;
