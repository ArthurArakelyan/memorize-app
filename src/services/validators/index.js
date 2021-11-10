import firstNameValidator from "./firstNameValidator";
import lastNameValidator from "./lastNameValidator";
import emailValidator from "./emailValidator";
import passwordValidator from "./passwordValidator";
import confirmPasswordValidator from "./confirmPasswordValidator";
import titleValidator from "./titleValidator";
import descriptionValidator from "./descriptionValidator";

const validators = {
  firstName: firstNameValidator,
  lastName: lastNameValidator,
  email: emailValidator,
  password: passwordValidator,
  confirmPassword: confirmPasswordValidator,
  title: titleValidator,
  description: descriptionValidator
};

const validate = (data) => !Object.keys(data).find((key) => !validators[key].call(data));
const isValid = (name, data) => validators[name].call(data);

export {
  validate,
  isValid
};