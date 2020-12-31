import React from "react";
import cx from 'clsx';
import { ReactComponent as ScreenSharedSymbolic } from '../../assets/icons/screen-shared-symbolic.svg';

function ScreenShared({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ScreenSharedSymbolic)}
    </span>
  );
}

export default ScreenShared;
