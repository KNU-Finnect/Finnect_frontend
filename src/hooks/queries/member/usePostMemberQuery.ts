import { useMutation } from '@tanstack/react-query';
import { postMember } from '@finnect/apis/member/usePostMember';
import { queryClient } from '@finnect/hooks/queries/Http';
import { IMemberProps } from '@finnect/interface/MemberInterface';

export const usePostMemberQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ nickname, role, phone }: IMemberProps) =>
      postMember(nickname, role, phone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postMember'] });
    },
  });

  return { mutate, isPending, isError, error };
};
