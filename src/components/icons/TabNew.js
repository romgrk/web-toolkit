import React from "react";
import cx from 'clsx';
import { ReactComponent as TabNewSymbolic } from '../../assets/icons/tab-new-symbolic.svg';

function TabNew({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(TabNewSymbolic)}
    </span>
  );
}

export default TabNew;
