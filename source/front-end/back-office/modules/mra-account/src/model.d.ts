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
