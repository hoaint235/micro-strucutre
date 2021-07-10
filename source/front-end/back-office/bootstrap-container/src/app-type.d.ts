declare type HttpClient = {
  userInterceptor();
};

declare type AwsCognito = {
  initialize();
  isAuthenticated(): Promise<boolean>;
};

declare type Module = {
  name: string;
  origin: string;
  entry: string;
  router?: boolean | string[];
  required?: boolean;
};

declare type Modules = {
  [module: string]: Module;
};

declare type Dependencies = {
  [depencency: string]: string;
};
