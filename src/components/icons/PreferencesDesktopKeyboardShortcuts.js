import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopKeyboardShortcutsSymbolic } from '../../assets/icons/preferences-desktop-keyboard-shortcuts-symbolic.svg';

function PreferencesDesktopKeyboardShortcuts({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopKeyboardShortcutsSymbolic)}
    </span>
  );
}

export default PreferencesDesktopKeyboardShortcuts;
