import React from "react";
import cx from 'clsx';
import { ReactComponent as XOfficeCalendarSymbolic } from '../../assets/icons/x-office-calendar-symbolic.svg';

function XOfficeCalendar({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(XOfficeCalendarSymbolic)}
    </span>
  );
}

export default XOfficeCalendar;
