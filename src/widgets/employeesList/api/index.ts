import { QueryKey } from '@tanstack/react-query';
import { IEmployee } from '../../../entities/employee/types';
import { axiosEmployees } from '../../../shared/api/employees';
import { IEmployeesFilter } from '../model';

function getSearchUrl({ gender, name, position, stack }: IEmployeesFilter) {
  return `?${name ? 'Name=' + name : ''}${gender ? '&Gender=' + gender : ''}${position ? '&Position=' + position : ''
    }${stack ? stack.map(t => '&Stack=' + t).join('') : ''}`;
}

export async function fetchEmpoyees({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: QueryKey;
}) {
  const url = getSearchUrl({
    name: queryKey[1] as string,
    position: queryKey[2] as string,
    gender: queryKey[3] as string,
    stack: queryKey[4] as string[],
  });

  return (await axiosEmployees.get<IEmployee[]>(`${url}&Page=${pageParam}`))
    .data;
}
