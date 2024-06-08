import { useMutation } from '@tanstack/react-query';

import { UsePWcpCellsHook } from '@finnect/apis/companies/usePWcpCellsHook';

import { queryClient } from '@finnect/hooks/queries/Http';

export const usePWcpCellQ = (onSuccessCallback: () => void) => {
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
    }) => UsePWcpCellsHook({ columnId, rowId, value, companyId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postCellCompany'] });
      onSuccessCallback();
    },
  });

  return { mutate, isPending, isError, error };
};
