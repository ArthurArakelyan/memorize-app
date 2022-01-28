import {memo} from "react";

import "./styles.scss";

const PrimaryButton = ({loading, children, className = '', ...other}) => {
  return (
    <button
      {...other}
      disabled={loading}
      className={`button-primary ${className}`}
    >
      {children}
    </button>
  );
}

export default memo(PrimaryButton);