import { useGetMember } from '@finnect/apis/member/useGetMember';

import { useQuery } from '@tanstack/react-query';

export const useGetMemberQuery = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['getMember'],
    queryFn: useGetMember,
    refetchOnMount: true,
  });

  return { data, isPending, isError, error, refetch };
};
