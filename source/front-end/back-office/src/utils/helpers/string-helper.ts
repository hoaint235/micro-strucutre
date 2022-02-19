import { Regex } from '@utils';

const stringHelper = {
  generateCognitoError(code: string): string {
    if (!code) {
      return code;
    }

    return `errors.cognito.${code.charAt(0).toLowerCase()}${code.slice(
      1
    )}Error`;
  },
  toCurrency(value: number | string): string {
    return value.toString().replace(Regex.currency, '$1,');
  },
};

export default stringHelper;
