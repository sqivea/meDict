import {
  DateState,
  CALENDAR_CHANGE_DATE,
  CalendarActionType
} from './types';

const initialState: DateState = {
  date: new Date()
};

export function calendarReducer(
  state = initialState,
  action: CalendarActionType
): DateState {
  // This pattern allows to add more actions in the future.
  switch (action.type) {
    case CALENDAR_CHANGE_DATE:
      return {
        date: action.payload
      };
    default:
      return state;
  }
}
