import { useMutation } from '@tanstack/react-query';

import { postWCCol } from '@finnect/apis/companies/usePostCompanyCol';

import { queryClient } from '@finnect/hooks/queries/Http';

export const usePostWCCol = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({
      columnId,
      workspaceId,
      columnName,
      columnType,
      isHided,
    }: {
      columnId: number;
      workspaceId: number;
      columnName: 'string';
      columnType: 'string';
      isHided: boolean;
    }) =>
      postWCCol({
        columnId,
        workspaceId,
        columnName,
        columnType,
        isHided,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postWCol'] });
    },
  });

  return { mutate, isPending, isError, error };
};
