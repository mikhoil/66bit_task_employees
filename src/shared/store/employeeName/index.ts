import { createEvent, createStore } from "effector";

export const setEmployeeName = createEvent<string>();

export const $employeeName = createStore<string>('').on(setEmployeeName, (_, name) => name);