import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopLocaleSymbolic } from '../../assets/icons/preferences-desktop-locale-symbolic.svg';

function PreferencesDesktopLocale({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopLocaleSymbolic)}
    </span>
  );
}

export default PreferencesDesktopLocale;
