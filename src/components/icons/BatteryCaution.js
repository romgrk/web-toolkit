import React from "react";
import cx from 'clsx';
import { ReactComponent as BatteryCautionSymbolic } from '../../assets/icons/battery-caution-symbolic.svg';

function BatteryCaution({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BatteryCautionSymbolic)}
    </span>
  );
}

export default BatteryCaution;
