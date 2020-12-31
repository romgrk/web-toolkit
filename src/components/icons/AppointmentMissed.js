import React from "react";
import cx from 'clsx';
import { ReactComponent as AppointmentMissedSymbolic } from '../../assets/icons/appointment-missed-symbolic.svg';

function AppointmentMissed({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AppointmentMissedSymbolic)}
    </span>
  );
}

export default AppointmentMissed;
