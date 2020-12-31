import React from "react";
import cx from 'clsx';
import { ReactComponent as AppointmentSoonSymbolic } from '../../assets/icons/appointment-soon-symbolic.svg';

function AppointmentSoon({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AppointmentSoonSymbolic)}
    </span>
  );
}

export default AppointmentSoon;
