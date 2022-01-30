import {memo} from "react";
import withField from "../../../../HOC/withField";

const Textarea = ({className = '', error, ...props}) => {
  return (
    <textarea className={`form-input form-textarea ${error ? 'invalid' : ''} ${className}`} {...props} />
  );
}

export default memo(withField(Textarea));
