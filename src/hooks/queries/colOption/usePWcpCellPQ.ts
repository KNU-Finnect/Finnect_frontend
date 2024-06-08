import { useMutation } from '@tanstack/react-query';

import { UsePWcpCellsPHook } from '@finnect/apis/colOption/usePWcpCellsPHook';

import { queryClient } from '@finnect/hooks/queries/Http';

export const usePWcpCellPQ = (onSuccessCallback: () => void) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({
      columnId,
      rowId,
      value,
      companyId,
    }: {
      columnId: number;
      rowId: number;
      value: string;
      companyId: number;
    }) => UsePWcpCellsPHook({ columnId, rowId, value, companyId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postCellPCell'] });
      onSuccessCallback();
    },
  });

  return { mutate, isPending, isError, error };
};
