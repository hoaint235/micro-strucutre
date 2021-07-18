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

declare interface IUser {
  email: string;
  roles: string[];
  phoneNumber: string;
}
