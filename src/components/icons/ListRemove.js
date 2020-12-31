import React from "react";
import cx from 'clsx';
import { ReactComponent as ListRemoveSymbolic } from '../../assets/icons/list-remove-symbolic.svg';

function ListRemove({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ListRemoveSymbolic)}
    </span>
  );
}

export default ListRemove;
