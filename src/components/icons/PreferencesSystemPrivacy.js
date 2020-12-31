import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemPrivacySymbolic } from '../../assets/icons/preferences-system-privacy-symbolic.svg';

function PreferencesSystemPrivacy({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemPrivacySymbolic)}
    </span>
  );
}

export default PreferencesSystemPrivacy;
