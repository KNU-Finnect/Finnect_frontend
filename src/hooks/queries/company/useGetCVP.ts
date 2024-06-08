import { GetCVPDetailData } from '@finnect/apis/companies/useGetCVPDetailData';

import { useQuery } from '@tanstack/react-query';

export const useGetCVP = (companyId: number) => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getCVPData'],
    queryFn: () => GetCVPDetailData(companyId),
  });

  return { data, isPending, isError, error, refetch };
};
