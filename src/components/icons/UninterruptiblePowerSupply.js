import React from "react";
import cx from 'clsx';
import { ReactComponent as UninterruptiblePowerSupplySymbolic } from '../../assets/icons/uninterruptible-power-supply-symbolic.svg';

function UninterruptiblePowerSupply({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UninterruptiblePowerSupplySymbolic)}
    </span>
  );
}

export default UninterruptiblePowerSupply;
