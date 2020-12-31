import React from "react";
import cx from 'clsx';
import { ReactComponent as GnomePowerManagerSymbolic } from '../../assets/icons/gnome-power-manager-symbolic.svg';

function GnomePowerManager({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GnomePowerManagerSymbolic)}
    </span>
  );
}

export default GnomePowerManager;
