declare module "@mra/utility" {
  export function changeLanguage(language: string);
  export function getCurrentUserRoles(): Promise<string[]>;
  export const API: any;
  export const resources: any;
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
  limit: number;
  offset: number;
  sorts?: Array<SortRequest>;
}
