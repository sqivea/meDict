import {
  CALENDAR_CHANGE_DATE,
  CalendarActionType
} from './types';

export function setDate(newDate: Date): CalendarActionType {
  return {
    type: CALENDAR_CHANGE_DATE,
    payload: newDate
  };
}
