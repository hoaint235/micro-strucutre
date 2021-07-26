declare type LanguageItem = {
  title: string;
  location: string;
};

declare type MenuItemProps = {
  label: string;
  icon?: any;
  path: string;
  pathsActivate?: string[];
  exact?: boolean;
  children?: MenuItemProps[];
};

declare type TypographyColor =
  | "initial"
  | "inherit"
  | "primary"
  | "secondary"
  | "textPrimary"
  | "textSecondary"
  | "error";

declare type TypographyProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  color?: TypographyColor;
};

declare type SelectionProps<T = string> = {
  key: T;
  value: string;
};

declare type IconMenuProps = {
  items: Array<any>;
  children?: any;
  color?: "primary" | "secondary";
  renderItem: (item) => any;
  onItemClick: (item) => void;
};

declare type GlobalProps = any;
declare type ClientMetadata = { [key: string]: string };
declare type StepProps<TStatus> = {
  status?: TStatus;
  data?: ExtendProps;
};
declare type HandleStepProps<TStatus> = {
  stepObj?: StepProps<TStatus>;
  onNavigateStep?: (obj: StepProps<TStatus>) => void;
};

declare type SignInStatus = "NO_LOGIN" | "FIRST_LOGIN" | "VERIFY_CODE";
declare type ForgotStatus = "SEND_ACTIVATION" | "CONFIRMATION_CODE";

declare type ExtendProps = {
  [key: string]: any;
};

declare type FormMode = "Add" | "Update";

declare type DialogStateProps = {
  open: boolean;
  mode: FormMode;
  params?: ExtendProps;
};

declare type DialogFormProps<TModel> = {
  state: DialogStateProps;
  onClose: () => void;
  onSubmit: (data: TModel) => void;
};

declare module "form" {
  declare type ManageForm<TModel = any> = {
    defaultValues?: TModel;
    onBack: () => void;
    onSubmit: (data: TModel) => void;
  };
}

declare module "model" {
  declare interface Certificate {
    email: string;
    password: string;
  }

  declare interface ListingResponse<TData> {
    data: Array<TData>;
    totalItems: number;
  }

  declare interface SortRequest {
    field: string;
    direction: string;
  }

  declare interface ListingRequest {
    limit?: number;
    offset?: number;
    sorts?: Array<SortRequest>;
    search?: string;
  }

  declare interface IAddress {
    houseNumber?: string;
    district?: string;
    city?: string;
  }

  declare type Role = string;

  declare interface IProfile {
    email: string;
    phoneNumber: string;
    countryCode: string;
  }

  declare interface IUserProfile extends IProfile {
    firstName: string;
    lastName: string;
  }

  declare interface IUser {
    id?: string;
    roles: Role[];
    profile: IUserProfile;
    isEditAddress: boolean;
    address?: IAddress;
  }

  declare interface ICategory {
    id?: string;
    name: string;
    level: int;
    parent?: ICategory;
  }

  declare interface ICategoryProduct {
    id?: string;
    name?: string;
  }

  declare interface IProduct {
    id: string;
    name: string;
    unit: string;
    vendor: string;
    category: ICategoryProduct;
    active?: boolean;
    description?: string;
  }

  declare interface IVendor {
    id?: string;
    name: string;
    profile: IProfile;
    address: IAddress;
  }

  declare interface IVendorView {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    active: boolean;
  }
}
