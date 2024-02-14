import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../shared/lib/react-query";
import { fetchEmployee } from "../api";

export function useEmployee(id: string) {
  return useQuery({ queryKey: [QueryKeys.employees, id], queryFn: () => fetchEmployee(id), enabled: !!id })
}