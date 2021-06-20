import { useQuery } from 'react-query';
import { ApiRequestService } from './api-service';

/**
 *
 * @returns Deals with character data api
 * Call this method from anywhere
 * Caching handled by react query
 * TODO: Enforce strong typing
 */
export const queryAllCharacters = () => {
  const apiRequestService = ApiRequestService.createInstance();
  return useQuery('fetchCharacters', apiRequestService.fetchCharacters);
};
