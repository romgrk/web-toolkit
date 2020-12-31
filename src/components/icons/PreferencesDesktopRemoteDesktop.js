import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopRemoteDesktopSymbolic } from '../../assets/icons/preferences-desktop-remote-desktop-symbolic.svg';

function PreferencesDesktopRemoteDesktop({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopRemoteDesktopSymbolic)}
    </span>
  );
}

export default PreferencesDesktopRemoteDesktop;
