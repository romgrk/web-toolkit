import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopScreensaverSymbolic } from '../../assets/icons/preferences-desktop-screensaver-symbolic.svg';

function PreferencesDesktopScreensaver({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopScreensaverSymbolic)}
    </span>
  );
}

export default PreferencesDesktopScreensaver;
