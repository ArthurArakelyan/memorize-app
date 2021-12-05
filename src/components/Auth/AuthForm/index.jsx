import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import AuthFormGroup from "./AuthFormGroup";
import {Form, PrimaryButton} from "../../common";

import {isValid} from "../../../services/validators";

import "./styles.scss";

const AuthForm = ({groups, type, data, submitted, handleSubmit, handleChange}) => {
  const isLoading = useSelector(({uiReducer}) => uiReducer);

  const onSubmit = (e) => {
    if(!isLoading) {
      handleSubmit(e);
    }
  }
  return (
    <Form onSubmit={onSubmit}>
      {groups.map((group, index) => {
        return (
          <AuthFormGroup
            key={group.name}
            value={data[group.name]}
            group={group}
            isValid={isValid(group.name, data)}
            submitted={submitted}
            autoFocus={index === 0}
            handleChange={handleChange}
          />
        );
      })}
      <PrimaryButton className="auth-form__submit" disabled={isLoading}>
        {type.name}
      </PrimaryButton>
      <Link to={type.link} className="auth-form__link">
        {type.linkName}
      </Link>
    </Form>
  );
}

export default AuthForm;