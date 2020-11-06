import {
  DECREMENTED,
  INCREMENTED,
  CREATED,
  RESETED,
  DELETED,
  CLEARED
} from './actionTypes';

export const incremented = counter => ({
  type: INCREMENTED,
  payload: {
    counter: counter
  }
});

export const decremented = counter => ({
  type: DECREMENTED,
  payload: {
    counter: counter
  }
});

export const created = () => ({
  type: CREATED
});

export const reseted = counter => ({
  type: RESETED,
  payload: {
    counter: counter
  }
});

export const deleted = id => ({
  type: DELETED,
  payload: {
    id: id
  }
});

export const cleared = () => ({
  type: CLEARED
});
