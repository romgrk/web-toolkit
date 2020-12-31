import React from "react";
import cx from 'clsx';
import { ReactComponent as ChangesPreventSymbolic } from '../../assets/icons/changes-prevent-symbolic.svg';

function ChangesPrevent({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ChangesPreventSymbolic)}
    </span>
  );
}

export default ChangesPrevent;
