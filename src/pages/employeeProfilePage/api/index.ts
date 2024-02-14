import { IEmployee } from "../../../entities/employee/types";
import { axiosEmployees } from "../../../shared/api/employees";

export async function fetchEmployee(id: string) {
  return (await axiosEmployees.get<IEmployee>(id)).data;
}