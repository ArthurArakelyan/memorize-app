import {Form} from "../../../common";

import "./styles.scss";

const AuthFormGroup = ({group, value, isValid, submitted, autoFocus, handleChange}) => {
  const {name, type, label, message} = group;

  return (
    <Form.Group
      isValid={isValid}
      validate={submitted}
      label={label}
      warning={message}
      name={name}
    >
      <Form.Input
        value={value}
        type={type}
        name={name}
        id={name}
        autoFocus={autoFocus}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default AuthFormGroup;