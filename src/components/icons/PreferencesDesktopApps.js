import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopAppsSymbolic } from '../../assets/icons/preferences-desktop-apps-symbolic.svg';

function PreferencesDesktopApps({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopAppsSymbolic)}
    </span>
  );
}

export default PreferencesDesktopApps;
