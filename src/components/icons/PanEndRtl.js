import React from "react";
import cx from 'clsx';
import { ReactComponent as PanEndRtlSymbolic } from '../../assets/icons/pan-end-symbolic-rtl.svg';

function PanEndRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PanEndRtlSymbolic)}
    </span>
  );
}

export default PanEndRtl;
