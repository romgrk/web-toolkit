import React from "react";
import cx from 'clsx';
import { ReactComponent as ListRemoveAllSymbolic } from '../../assets/icons/list-remove-all-symbolic.svg';

function ListRemoveAll({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ListRemoveAllSymbolic)}
    </span>
  );
}

export default ListRemoveAll;
