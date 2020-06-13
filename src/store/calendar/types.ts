export const CALENDAR_CHANGE_DATE = 'CALENDAR_CHANGE_DATE';

export interface DateState {
  date: Date
}

interface CalendarChangeDateAction {
  type: typeof CALENDAR_CHANGE_DATE,
  payload: DateState
}

export type CalendarActionType = CalendarChangeDateAction;
