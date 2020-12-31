import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopFontSymbolic } from '../../assets/icons/preferences-desktop-font-symbolic.svg';

function PreferencesDesktopFont({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopFontSymbolic)}
    </span>
  );
}

export default PreferencesDesktopFont;
