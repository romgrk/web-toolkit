import React from "react";
import cx from 'clsx';
import { ReactComponent as EmblemImportantSymbolic } from '../../assets/icons/emblem-important-symbolic.svg';

function EmblemImportant({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(EmblemImportantSymbolic)}
    </span>
  );
}

export default EmblemImportant;
