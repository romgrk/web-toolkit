import React from "react";
import cx from 'clsx';
import { ReactComponent as PanStartRtlSymbolic } from '../../assets/icons/pan-start-symbolic-rtl.svg';

function PanStartRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PanStartRtlSymbolic)}
    </span>
  );
}

export default PanStartRtl;
