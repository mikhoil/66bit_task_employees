import { useInfiniteQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../shared/lib/react-query';
import { fetchEmpoyees } from '../api';
import { IEmployeesFilter } from '../model';

export function useEmployees({ gender, name, position, stack }: IEmployeesFilter) {
  return useInfiniteQuery({
    queryKey: [QueryKeys.employees, name, position, gender, stack],
    queryFn: ({ pageParam, queryKey }) => fetchEmpoyees({ pageParam, queryKey }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.length === 10 ? pages.length + 1 : undefined
  });
}
