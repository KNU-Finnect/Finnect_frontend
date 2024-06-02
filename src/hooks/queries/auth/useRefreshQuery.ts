import { useMutation } from '@tanstack/react-query';
import { refreshWorkSpace } from '@finnect/apis/auth/refresh.api';
import { queryClient } from '@finnect/hooks/queries/Http';

export const useRefreshQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (workspaceId: number) => refreshWorkSpace(workspaceId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getRefresh'] });
    },
  });

  return { mutate, isPending, isError, error };
};
