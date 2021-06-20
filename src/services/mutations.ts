import { useMutation } from 'react-query';
import { IAddPost } from '../models/common/post';
import { ApiRequestService } from './api-service';
import { AppQueryClient } from './clients/query-client';

export const addNewPostMutation = () => {
  const apiRequestService = ApiRequestService.createInstance();

  const addPostMutation = useMutation((newPost: IAddPost) => apiRequestService.addPost(newPost), {
    onSuccess: () => {
      // Query Invalidations
      AppQueryClient.invalidateQueries('todos');
    },
  });
  return addPostMutation;
};
