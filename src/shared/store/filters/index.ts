import { createEvent, createStore } from 'effector';
import { genders, positions, stack } from '../../constants';

export const setName = createEvent<string>();

export const $name = createStore<string>('').on(setName, (_, name) => name);

export const setPosition = createEvent<keyof typeof positions | undefined>();

export const $position = createStore<keyof typeof positions | undefined>(undefined, { skipVoid: false }).on(
  setPosition,
  (_, position) => position,
);

export const setGender = createEvent<keyof typeof genders | undefined>();

export const $gender = createStore<keyof typeof genders | undefined>(undefined, { skipVoid: false }).on(setGender, (_, gender) => gender);

export const setStack = createEvent<(keyof typeof stack)[]>();
export const addToStack = createEvent<keyof typeof stack>();
export const removeFromStack = createEvent<keyof typeof stack>();

export const $stack = createStore<(keyof typeof stack)[]>([])
  .on(addToStack, (state, technology) => [...state, technology])
  .on(removeFromStack, (state, technology) =>
    state.filter(t => t !== technology),
  )
  .on(setStack, (_, stack) => stack);
