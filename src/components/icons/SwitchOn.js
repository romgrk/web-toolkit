import React from "react";
import cx from 'clsx';
import { ReactComponent as SwitchOnSymbolic } from '../../assets/icons/switch-on.symbolic.svg';

function SwitchOn({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SwitchOnSymbolic)}
    </span>
  );
}

export default SwitchOn;
