import React from "react";
import cx from 'clsx';
import { ReactComponent as ListDragHandleSymbolic } from '../../assets/icons/list-drag-handle-symbolic.svg';

function ListDragHandle({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ListDragHandleSymbolic)}
    </span>
  );
}

export default ListDragHandle;
