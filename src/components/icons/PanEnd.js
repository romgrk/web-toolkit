import React from "react";
import cx from 'clsx';
import { ReactComponent as PanEndSymbolic } from '../../assets/icons/pan-end-symbolic.svg';

function PanEnd({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PanEndSymbolic)}
    </span>
  );
}

export default PanEnd;
