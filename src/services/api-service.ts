import axios, { AxiosRequestConfig } from 'axios';
import { apiClient } from './clients/api-client';

export class ApiRequestService {
  config?: AxiosRequestConfig = {};

  private cancellationToken = axios.CancelToken.source();

  static createInstance(): ApiRequestService {
    const activeInstance = new ApiRequestService();
    activeInstance.cancellationToken = axios.CancelToken.source();
    if (activeInstance.config) {
      activeInstance.config.cancelToken = activeInstance.cancellationToken.token;
    }
    return activeInstance;
  }

  cancelRequests() {
    this.cancellationToken.cancel('RequestCancellation');
    return ApiRequestService.createInstance();
  }

  fetchCharacters = () => apiClient.get(`/character`);
}
