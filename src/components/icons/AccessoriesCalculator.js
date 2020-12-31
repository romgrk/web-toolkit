import React from "react";
import cx from 'clsx';
import { ReactComponent as AccessoriesCalculatorSymbolic } from '../../assets/icons/accessories-calculator-symbolic.svg';

function AccessoriesCalculator({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AccessoriesCalculatorSymbolic)}
    </span>
  );
}

export default AccessoriesCalculator;
