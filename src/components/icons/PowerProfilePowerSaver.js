import React from "react";
import cx from 'clsx';
import { ReactComponent as PowerProfilePowerSaverSymbolic } from '../../assets/icons/power-profile-power-saver-symbolic.svg';

function PowerProfilePowerSaver({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PowerProfilePowerSaverSymbolic)}
    </span>
  );
}

export default PowerProfilePowerSaver;
