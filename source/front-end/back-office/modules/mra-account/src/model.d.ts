declare interface ListingResponse<TData> {
  data: Array<TData>;
  totalItems: number;
}

declare interface SortRequest {
  field: string;
  direction: string;
}

declare interface ListingRequest {
  limit: number;
  offset: number;
  sorts?: Array<SortRequest>;
}

declare interface IAddress {
  houseNumber?: string;
  district?: string;
  city?: string;
}

declare type Role = string;

declare interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

declare interface IUser {
  roles: Role[];
  profile: IProfile;
  isEditAddress?: boolean;
  address?: IAddress;
}
