import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemSymbolic } from '../../assets/icons/preferences-system-symbolic.svg';

function PreferencesSystem({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemSymbolic)}
    </span>
  );
}

export default PreferencesSystem;
