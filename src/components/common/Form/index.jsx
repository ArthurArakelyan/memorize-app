import "./styles.scss";

import Input from "./components/Input";
import Textarea from "./components/Textarea";

const Form = ({className = '', children, ...props}) => {
  return (
    <form className={`form ${className}`} {...props}>
      {children}
    </form>
  );
}

Form.Group = ({className = '', name, isRequired = true, label, children, ...other}) => {
  return (
    <div className={`form-group ${className}`} {...other}>
      {label &&
        <label className="form-label" htmlFor={name}>
          {label}
          {!isRequired &&
            <i title="This field not required" className="form-label__icon far fa-question-circle" />
          }
        </label>
      }
      {children}
    </div>
  );
}

Form.Input = Input;
Form.Textarea = Textarea;

export default Form;