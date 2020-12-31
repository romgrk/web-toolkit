import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesDesktopWallpaperSymbolic } from '../../assets/icons/preferences-desktop-wallpaper-symbolic.svg';

function PreferencesDesktopWallpaper({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesDesktopWallpaperSymbolic)}
    </span>
  );
}

export default PreferencesDesktopWallpaper;
