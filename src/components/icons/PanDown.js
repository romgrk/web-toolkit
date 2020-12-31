import React from "react";
import cx from 'clsx';
import { ReactComponent as PanDownSymbolic } from '../../assets/icons/pan-down-symbolic.svg';

function PanDown({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PanDownSymbolic)}
    </span>
  );
}

export default PanDown;
