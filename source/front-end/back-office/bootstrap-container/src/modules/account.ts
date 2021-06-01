import { registerApplication } from 'single-spa';

export const Account = {
  register(): void {
    registerApplication({
      name: '@mra/sign-in',
      app: () => System.import('@mra/authentication'),
      activeWhen: ['/sign-in']
    });

    registerApplication({
      name: '@mra/forgot-password',
      app: () => System.import('@mra/authentication'),
      activeWhen: ['/forgot-password']
    });
  }
}