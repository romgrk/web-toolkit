import React from "react";
import cx from 'clsx';
import { ReactComponent as PanUpSymbolic } from '../../assets/icons/pan-up-symbolic.svg';

function PanUp({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PanUpSymbolic)}
    </span>
  );
}

export default PanUp;
