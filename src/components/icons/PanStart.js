import React from "react";
import cx from 'clsx';
import { ReactComponent as PanStartSymbolic } from '../../assets/icons/pan-start-symbolic.svg';

function PanStart({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PanStartSymbolic)}
    </span>
  );
}

export default PanStart;
