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
      setRowData(data.result.people);
    }
  }, [data, setRowData]);

  const addPerson = ({
    personName,
    personRole,
    personEmail,
    personPhone,
  }: IPeopleProps) => {
    mutate(
      { personName, personRole, personEmail, personPhone },
      {
        onSuccess: () => {
          setRowData((prevData) => [
            ...prevData,
            { personName, personRole, personEmail, personPhone },
          ]);
        },
      }
    );
  };

  return { rowData, columnDefs, addPerson, isPending, isError, error };
};
