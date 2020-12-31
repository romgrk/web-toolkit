import React from "react";
import cx from 'clsx';
import { ReactComponent as GoaPanelSymbolic } from '../../assets/icons/goa-panel-symbolic.svg';

function GoaPanel({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(GoaPanelSymbolic)}
    </span>
  );
}

export default GoaPanel;
