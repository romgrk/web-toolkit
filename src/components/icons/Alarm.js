import React from "react";
import cx from 'clsx';
import { ReactComponent as AlarmSymbolic } from '../../assets/icons/alarm-symbolic.svg';

function Alarm({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AlarmSymbolic)}
    </span>
  );
}

export default Alarm;
