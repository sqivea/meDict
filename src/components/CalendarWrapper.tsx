import React from 'react';
import Calendar from 'react-calendar';

import { connect } from 'react-redux';

import cn from 'styles/CalendarWrapper.module.scss';
import 'react-calendar/dist/Calendar.css';
import 'styles/overrides/Calendar.scss';

const CalendarWrapper = () => (
  <div className={cn['MainWrapper']}>
    <Calendar className={cn['Calendar']} />
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarWrapper);
