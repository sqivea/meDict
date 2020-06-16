import { combineReducers } from 'redux';
import { calendarReducer } from './calendar/reducers';

const rootReducer = combineReducers({
  // Allows to combine any new reducers.
  calendar: calendarReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
