import React from "react";
import cx from 'clsx';
import { ReactComponent as PreferencesSystemSearchSymbolic } from '../../assets/icons/preferences-system-search-symbolic.svg';

function PreferencesSystemSearch({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(PreferencesSystemSearchSymbolic)}
    </span>
  );
}

export default PreferencesSystemSearch;
