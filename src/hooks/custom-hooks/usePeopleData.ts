import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import {
  columnDefsPeopleState,
  rowPeopleDataState,
} from '@finnect/atoms/people/usePeople';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

import { usePostPeopleQuery } from '@finnect/hooks/queries/people/usePostPeopleQuery';
import { useGetPeopleQuery } from '@finnect/hooks/queries/people/useGetPeopleQuery';

export const usePeopleData = () => {
  const [rowData, setRowData] = useRecoilState(rowPeopleDataState);
  const [columnDefs] = useRecoilState(columnDefsPeopleState);
  const { mutate } = usePostPeopleQuery();
  const { data, isPending, isError, error } = useGetPeopleQuery();

  useEffect(() => {
    if (data) {
      setRowData(data.result.members);
    }
    console.log('data', data);

    if (isPending) {
      console.log('Fetching row data...');
    }

    if (isError) {
      console.error('Error fetching row data:', error);
    }
  }, [setRowData, data, isPending, isError, error]);

  const addPerson = ({ nickname, role, phone }: IPeopleProps) => {
    mutate(
      { nickname, role, phone },
      {
        onSuccess: () => {
          setRowData((prevData) => [...prevData, { nickname, role, phone }]);
        },
      }
    );
  };

  return { rowData, columnDefs, addPerson };
};
