import React from "react";
import cx from 'clsx';
import { ReactComponent as ViewMirrorSymbolic } from '../../assets/icons/view-mirror-symbolic.svg';

function ViewMirror({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ViewMirrorSymbolic)}
    </span>
  );
}

export default ViewMirror;
