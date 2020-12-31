import React from "react";
import cx from 'clsx';
import { ReactComponent as AccessoriesDictionarySymbolic } from '../../assets/icons/accessories-dictionary-symbolic.svg';

function AccessoriesDictionary({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AccessoriesDictionarySymbolic)}
    </span>
  );
}

export default AccessoriesDictionary;
