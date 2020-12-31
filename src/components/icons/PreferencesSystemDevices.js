import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemDevicesSymbolic } from '../../assets/icons/preferences-system-devices-symbolic.svg';

function PreferencesSystemDevices({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemDevicesSymbolic)}
    </span>
  );
}

export default PreferencesSystemDevices;
