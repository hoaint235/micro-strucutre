type LanguageItem = {
  title: string;
  location: string;
};

type AwsCognito = {
  signOut(global?: boolean): Promise<any>;
};
