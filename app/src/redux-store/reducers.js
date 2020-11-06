import {
  DECREMENTED,
  INCREMENTED,
  CREATED,
  RESETED,
  DELETED,
  CLEARED
} from './actionTypes';
import { store } from './store';
import { produce } from 'immer';

export default function reducer(state, action) {
  switch (action.type) {
    case INCREMENTED:
      const incCounters = [...state.counters];
      const index = incCounters.indexOf(action.payload.counter);
      incCounters[index] = { ...action.payload.counter };
      incCounters[index].value += 1;
      return { counters: incCounters };
    case DECREMENTED:
      const decCounters = [...state.counters];
      const decIndex = decCounters.indexOf(action.payload.counter);
      decCounters[decIndex] = { ...action.payload.counter };
      if (decCounters[decIndex].value > 0) decCounters[decIndex].value -= 1;
      return { counters: decCounters };
    case CREATED:
      return produce(state, draft => {
        if (state.counters.length === 0)
          draft.counters.push({ id: 1, value: 0 });
        else {
          const max = state.counters.reduce((prev, curr) =>
            prev.id > curr.id ? prev : curr
          );
          const nextId = max.id + 1;
          draft.counters.push({ id: nextId, value: 0 });
        }
      });
    case RESETED:
      const rCounters = [...state.counters];
      const rIndex = rCounters.indexOf(action.payload.counter);
      rCounters[rIndex] = { ...action.payload.counter };
      rCounters[rIndex].value = 0;
      return { counters: rCounters };
    case CLEARED:
      const cCounters = [...state.counters];
      for (let i = 0; i < cCounters.length; i++) {
        cCounters[i].value = 0;
      }
      return { counters: cCounters };
    case DELETED:
      console.log(action);
      return produce(state, draft => {
        draft.counters.splice(
          draft.counters.findIndex(c => c.id === action.payload.id),
          1
        );
      });
    default:
      break;
  }

  return store;
}
