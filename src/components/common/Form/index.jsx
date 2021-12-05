import "./styles.scss";

const Form = ({className = '', children, ...props}) => {
  return (
    <form className={`form ${className}`} {...props}>
      {children}
    </form>
  );
}

Form.Group = ({className = '', name, isValid, validate, isRequired = true, label, warning, children, ...other}) => {
  return (
    <div className={`form-group ${!isValid && validate ? 'invalid' : ''} ${className}`} {...other}>
      {label &&
        <label className="form-label" htmlFor={name}>
          {label}
          {!isRequired &&
            <i title="This field not required" className="form-label__icon far fa-question-circle" />
          }
        </label>
      }
      {children}
      {warning &&
        <p className={`form-warning ${!isValid && validate ? '' : 'hide'}`}>
          {warning}
        </p>
      }
    </div>
  );
}

Form.Input = ({...props}) => {
  return (
    <input className="form-input" {...props} />
  );
}

Form.Textarea = ({...props}) => {
  return (
    <textarea className="form-input form-textarea" {...props} />
  );
}

export default Form;