import React from "react";
import cx from 'clsx';
import { ReactComponent as FocusLegacySystraySymbolic } from '../../assets/icons/focus-legacy-systray-symbolic.svg';

function FocusLegacySystray({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FocusLegacySystraySymbolic)}
    </span>
  );
}

export default FocusLegacySystray;
