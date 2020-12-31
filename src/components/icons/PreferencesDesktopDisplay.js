import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopDisplaySymbolic } from '../../assets/icons/preferences-desktop-display-symbolic.svg';

function PreferencesDesktopDisplay({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopDisplaySymbolic)}
    </span>
  );
}

export default PreferencesDesktopDisplay;
