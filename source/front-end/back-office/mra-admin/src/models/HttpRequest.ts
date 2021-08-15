export interface ListingResponse<TData> {
  data: Array<TData>;
  totalItems: number;
}

export interface SortRequest {
  field: string;
  direction: string;
}

export interface ListingRequest {
  limit?: number;
  offset?: number;
  sorts?: Array<SortRequest>;
  search?: string;
}
