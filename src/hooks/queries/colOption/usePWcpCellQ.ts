import { useMutation } from '@tanstack/react-query';

import { UsePWcpCellsHook } from '@finnect/apis/colOption/usePWcpCellsHook';

import { queryClient } from '@finnect/hooks/queries/Http';

export const usePWcpCellQ = (onSuccessCallback: () => void) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({
      columnId,
      rowId,
      value,
    }: {
      columnId: number;
      rowId: number;
      value: string;
    }) => UsePWcpCellsHook({ columnId, rowId, value }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postCell'] });
      onSuccessCallback();
    },
  });

  return { mutate, isPending, isError, error };
};
