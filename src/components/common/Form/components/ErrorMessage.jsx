import {memo} from "react";

const ErrorMessage = ({error, validate}) => {
  return (
    <p className={`form-warning ${validate && error.error ? '' : 'hide'}`}>
      {error.message}
    </p>
  );
}

export default memo(ErrorMessage);
