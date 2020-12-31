import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesColorSymbolic } from '../../assets/icons/preferences-color-symbolic.svg';

function PreferencesColor({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesColorSymbolic)}
    </span>
  );
}

export default PreferencesColor;
