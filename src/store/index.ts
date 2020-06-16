import { combineReducers, createStore } from 'redux';
import { calendarReducer } from './calendar/reducers';

const rootReducer = combineReducers({
  // Allows to combine any new reducers.
  calendar: calendarReducer
});

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store;
