import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopKeyboardSymbolic } from '../../assets/icons/preferences-desktop-keyboard-symbolic.svg';

function PreferencesDesktopKeyboard({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopKeyboardSymbolic)}
    </span>
  );
}

export default PreferencesDesktopKeyboard;
