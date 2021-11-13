import "./styles.scss";

import {isValid} from "../../../../services/validators";

const AuthFormGroup = ({group, value, data, submitted, handleChange}) => {
  const {name, type, label} = group;

  return (
    <div className={`auth-form__group ${!isValid(name, data) && submitted ? 'invalid' : ''}`}>
      <input
        className="auth-form__group_input"
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
      />
      <label className="auth-form__group_label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default AuthFormGroup;