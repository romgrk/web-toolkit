import React from "react";
import cx from 'clsx';
import { ReactComponent as ErrorCorrectSymbolic } from '../../assets/icons/error-correct-symbolic.svg';

function ErrorCorrect({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ErrorCorrectSymbolic)}
    </span>
  );
}

export default ErrorCorrect;
