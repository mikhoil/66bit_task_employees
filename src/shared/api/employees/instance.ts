import axios from "axios";

export const axiosEmployees = axios.create({ baseURL: 'https://frontend-test-api.stk8s.66bit.ru/api/Employee' });