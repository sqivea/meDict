import React from 'react';
import Calendar from 'react-calendar';

import { connect } from 'react-redux';
import { CalendarActionType } from 'store/calendar/types';
import { setDate } from 'store/calendar/actions';

import cn from 'styles/CalendarWrapper.module.scss';
import 'react-calendar/dist/Calendar.css';
import 'styles/overrides/Calendar.scss';

interface SetDateProp {
  setDateProp: (newDate: Date) => CalendarActionType
}

const mapDispatchToProps = {
  setDateProp: setDate
};

const CalendarWrapper = ({ setDateProp }: SetDateProp) => (
  <div className={cn['MainWrapper']}>
    <Calendar
      className={cn['Calendar']}
      onChange={(value) => setDateProp(value instanceof Date ? value : value[0])}
    />
  </div>
);

export default connect(null, mapDispatchToProps)(CalendarWrapper);
