import { useMutation } from '@tanstack/react-query';

import { UsePWcpCellsPsHook } from '@finnect/apis/colOption/usePWcpCellsPsHook';

import { queryClient } from '@finnect/hooks/queries/Http';

export const usePWcpCellPQ = (onSuccessCallback: () => void) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({
      columnId,
      rowId,
      value,
      peopleId,
    }: {
      columnId: number;
      rowId: number;
      value: string;
      peopleId: number;
    }) => UsePWcpCellsPsHook({ columnId, rowId, value, peopleId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postCellPsCell'] });
      onSuccessCallback();
    },
  });

  return { mutate, isPending, isError, error };
};
