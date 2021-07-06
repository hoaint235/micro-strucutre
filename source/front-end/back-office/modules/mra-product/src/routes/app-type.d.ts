declare type HttpOptions = any;

declare type HtppClient = {
  get(url: string, options?: HttpOptions): Promise<any>;
  post<T = unknown>(url: string, payload: T, options?: HttpOptions): Promise<any>;
  put<T = unknown>(url: string, payload: T, options?: HttpOptions): Promise<any>;
  delete(url: string, options?: HttpOptions): Promise<any>;
}