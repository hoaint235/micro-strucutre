import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class BaseService {
  public static async get<TRequest = any, TResponse = any>(
    url: string,
    loading = true,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axios.get<TRequest, AxiosResponse<TResponse>>(
      url,
      { ...config, data: { cancelLoading: !loading } }
    );
    return response.data;
  }

  public static async post<TRequest = any, TResponse = any>(
    url: string,
    payload: TRequest,
    loading = true,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axios.post<TRequest, AxiosResponse<TResponse>>(
      url,
      {
        ...payload,
        cancelLoading: !loading,
      },
      config
    );
    return response.data;
  }

  public static async put<TRequest = any, TResponse = any>(
    url: string,
    payload: TRequest,
    loading = true,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axios.put<TRequest, AxiosResponse<TResponse>>(
      url,
      {
        ...payload,
        cancelLoading: !loading,
      },
      config
    );
    return response.data;
  }

  public static async delete<TRequest = any, TResponse = any>(
    url: string,
    loading = true,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await axios.delete<TRequest, AxiosResponse<TResponse>>(
      url,
      { ...config, data: { cancelLoading: !loading } }
    );
    return response.data;
  }
}
