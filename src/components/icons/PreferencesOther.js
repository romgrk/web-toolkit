import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesOtherSymbolic } from '../../assets/icons/preferences-other-symbolic.svg';

function PreferencesOther({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesOtherSymbolic)}
    </span>
  );
}

export default PreferencesOther;
