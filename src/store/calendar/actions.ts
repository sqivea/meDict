import {
  DateState,
  CALENDAR_CHANGE_DATE,
  CalendarActionTypes
} from './types';

export function changeDate(newDate: DateState): CalendarActionTypes {
  return {
    type: CALENDAR_CHANGE_DATE,
    payload: newDate
  };
}
