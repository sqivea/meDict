import React from 'react';
import Calendar from 'react-calendar';

/* Redux. */
import { connect } from 'react-redux';
import { CalendarActionType } from 'store/calendar/types';
import { setDate } from 'store/calendar/actions';

/* Styles. */
import cn from 'styles/CalendarWrapper.module.scss';
import 'react-calendar/dist/Calendar.css';
import 'styles/overrides/Calendar.scss';

/**
 * Type declaration for the main calendar dispatcher.
 */
interface CalendarWrapperProps {
  setDateProp: (newDate: Date) => CalendarActionType
}

/**
 * Connector between the component's props setters and the store.
 */
const mapDispatchToProps = {
  setDateProp: setDate
};

/**
 * Wrapper for the calendar used to switching words by current date.
 */
const CalendarWrapper = ({ setDateProp }: CalendarWrapperProps) => (
  <div className={cn['MainWrapper']}>
    {/* The calendar itself. */}
    <Calendar
      className={cn['Calendar']}
      onChange={
        (value) => setDateProp(value instanceof Date ? value : value[0])
      }
    />
  </div>
);

/* The CalendarWrapper connected to the Redux store. */
export default connect(null, mapDispatchToProps)(CalendarWrapper);
