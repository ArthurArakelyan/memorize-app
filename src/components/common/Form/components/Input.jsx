import {memo} from "react";
import withField from "../../../../HOC/withField";

const Input = ({className = '', error, ...props}) => {
  return (
    <input className={`form-input ${error ? 'invalid' : ''} ${className}`} {...props} />
  );
}

export default memo(withField(Input));
