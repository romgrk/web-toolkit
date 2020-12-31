import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemTimeSymbolic } from '../../assets/icons/preferences-system-time-symbolic.svg';

function PreferencesSystemTime({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemTimeSymbolic)}
    </span>
  );
}

export default PreferencesSystemTime;
