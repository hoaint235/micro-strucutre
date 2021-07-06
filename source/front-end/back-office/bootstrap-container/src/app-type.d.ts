declare type HttpClient = {
  userInterceptor();
};

declare type AwsCognito = {
  initialize();
  isAuthenticated(): Promise<boolean>;
};
