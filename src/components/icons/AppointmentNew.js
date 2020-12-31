import React from "react";
import cx from 'clsx';
import { ReactComponent as AppointmentNewSymbolic } from '../../assets/icons/appointment-new-symbolic.svg';

function AppointmentNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AppointmentNewSymbolic)}
    </span>
  );
}

export default AppointmentNew;
