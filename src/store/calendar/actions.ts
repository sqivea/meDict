import {
  DateState,
  CALENDAR_CHANGE_DATE,
  CalendarActionType
} from './types';

export function changeDate(newDate: Date): CalendarActionType {
  return {
    type: CALENDAR_CHANGE_DATE,
    payload: newDate
  };
}
