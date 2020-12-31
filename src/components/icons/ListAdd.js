import React from "react";
import cx from 'clsx';
import { ReactComponent as ListAddSymbolic } from '../../assets/icons/list-add-symbolic.svg';

function ListAdd({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ListAddSymbolic)}
    </span>
  );
}

export default ListAdd;
