import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

export class BaseService {
  protected api: string;

  constructor(api: string) {
    this.api = api;
  }

  private buildingUrlApi = (url: string) => `/${this.api}/${url}`;

  protected async get<TRequest = any, TResponse = any>(
    url: string,
    loading = true,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axios.get<TRequest, AxiosResponse<TResponse>>(
      this.buildingUrlApi(url),
      Object.assign({ ...config }, { data: { cancelLoading: !loading } })
    );
    return response.data;
  }

  protected async post<TRequest = any, TResponse = any>(
    url: string,
    payload: TRequest,
    loading = true,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axios.post<TRequest, AxiosResponse<TResponse>>(
      this.buildingUrlApi(url),
      {
        ...payload,
        cancelLoading: !loading,
      },
      config
    );
    return response.data;
  }

  protected async put<TRequest = any, TResponse = any>(
    url: string,
    payload: TRequest,
    loading = true,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axios.put<TRequest, AxiosResponse<TResponse>>(
      this.buildingUrlApi(url),
      {
        ...payload,
        cancelLoading: !loading,
      },
      config
    );
    return response.data;
  }

  protected async delete<TRequest = any, TResponse = any>(
    url: string,
    loading = true,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axios.delete<TRequest, AxiosResponse<TResponse>>(
      this.buildingUrlApi(url),
      Object.assign({ ...config }, { data: { cancelLoading: !loading } })
    );
    return response.data;
  }
}
