import { INCREMENTED, CREATED, RESETED, DELETED } from "./actionTypes";

export const incremented = (counter) => ({
  type: INCREMENTED,
  payload: {
    counter: counter,
  },
});

export const created = () => ({
  type: CREATED
});

export const reseted = () =>({
  type: RESETED
});

export const deleted = (id) =>({
  type: DELETED,
  payload: {
    id: id
  }
});
