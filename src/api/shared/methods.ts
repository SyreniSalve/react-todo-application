import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { BASE_API_URL } from "./constants";

export function get<T>(url: string): Promise<AxiosResponse<T>> {
  return axios.get<T>(`${BASE_API_URL}/${url}`);
}

export const post = <T>(
  url: string,
  body: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> =>
  axios.post<T>(`${BASE_API_URL}/${url}`, body, config);

// export const post = <T>(
//   url: string,
//   config?: AxiosRequestConfig
// ): Promise<AxiosResponse<T>> =>
//   axios.post<T>(`${BASE_API_URL}/${url}`, config);

export const put = <T, R>(
  url: string,
  body: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<R>> =>
  axios.put<R>(`${BASE_API_URL}/${url}`, body, config);

export const deleteRequest = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> =>
  axios.delete<T>(`${BASE_API_URL}/${url}`, config);
