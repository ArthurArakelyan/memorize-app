import {Form} from "../../../common";

import "./styles.scss";

const AuthFormGroup = ({group, value, submitted, autoFocus, handleChange}) => {
  const {name, type, label, validations} = group;

  return (
    <Form.Group
      label={label}
      name={name}
    >
      <Form.Input
        value={value}
        type={type}
        name={name}
        id={name}
        validations={validations}
        validate={submitted}
        autoFocus={autoFocus}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default AuthFormGroup;