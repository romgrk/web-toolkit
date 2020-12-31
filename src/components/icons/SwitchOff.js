import React from "react";
import cx from 'clsx';
import { ReactComponent as SwitchOffSymbolic } from '../../assets/icons/switch-off.symbolic.svg';

function SwitchOff({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SwitchOffSymbolic)}
    </span>
  );
}

export default SwitchOff;
