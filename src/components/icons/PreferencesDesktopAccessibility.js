import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopAccessibilitySymbolic } from '../../assets/icons/preferences-desktop-accessibility-symbolic.svg';

function PreferencesDesktopAccessibility({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopAccessibilitySymbolic)}
    </span>
  );
}

export default PreferencesDesktopAccessibility;
