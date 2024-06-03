import { useMutation } from '@tanstack/react-query';

import { postWCompany } from '@finnect/apis/companies/usePostWCompany';

import { ICompanyPostProps } from '@finnect/interface/CompanyInterface';

import { queryClient } from '@finnect/hooks/queries/Http';

export const usePostWC = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ domain, companyName }: ICompanyPostProps) =>
      postWCompany({ domain, companyName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postCompany'] });
    },
  });

  return { mutate, isPending, isError, error };
};
