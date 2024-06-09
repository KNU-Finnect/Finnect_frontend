import { usePostWorkspace } from '@finnect/apis/workspace/usePostWorkSpace';
import { queryClient } from '@finnect/hooks/queries/Http';

import { useMutation } from '@tanstack/react-query';

export const usePostWorkSpaceQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: usePostWorkspace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getWorkspace'] });
    },
  });

  return { mutate, isPending, isError, error };
};
