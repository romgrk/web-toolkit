import React from "react";
import cx from 'clsx';
import { ReactComponent as SemiStarredRtlSymbolic } from '../../assets/icons/semi-starred-symbolic-rtl.svg';

function SemiStarredRtl({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SemiStarredRtlSymbolic)}
    </span>
  );
}

export default SemiStarredRtl;
