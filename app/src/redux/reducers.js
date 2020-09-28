import { INCREMENTED, CREATED, RESETED, DELETED } from "./actionTypes";
import { store } from "./store";
import {produce } from "immer";

export default function reducer(state, action) {
  switch (action.type) {
    case INCREMENTED :
      const incCounters = [...state.counters];
      const index = incCounters.indexOf(action.payload.counter);
      incCounters[index] = { ...action.payload.counter };
      incCounters[index].value+=1;
      return { counters: incCounters };
      break;
    case CREATED:
      return produce(state, draft => {
        if (state.counters.length==0) draft.counters.push({ id: 1, value: 0 }); else {
          const max = state.counters.reduce((prev, curr) => prev.id > curr.id ? prev : curr);
          const nextId = max.id + 1;
          draft.counters.push({ id: nextId, value: 0 },);
        }

        });
      break;
    case RESETED:
      return produce(state, draft => {
        console.log(draft);
        draft.counters.map((c) => {
          c.value = 0;
          return c;
        });
      });
      break
    case DELETED:
      console.log(action);
      return produce(state, draft => {
        draft.counters.splice(draft.counters.findIndex(c => c.id === action.payload.id), 1);
      });
      break;
  }


  return store;
}
