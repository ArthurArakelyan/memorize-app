import {Link} from "react-router-dom";

import AuthFormGroup from "./AuthFormGroup";
import PrimaryButton from "../../common/PrimaryButton";

import "./styles.scss";

const AuthForm = ({groups, type, data, submitted, handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {groups.map((group, index) => {
        return (
          <AuthFormGroup
            key={group.name}
            value={data[group.name]}
            data={data}
            group={group}
            submitted={submitted}
            autoFocus={index === 0}
            handleChange={handleChange}
          />
        );
      })}
      <PrimaryButton className="auth-form__submit">{type.name}</PrimaryButton>
      <Link to={type.link} className="auth-form__link">
        {type.linkName}
      </Link>
    </form>
  );
}

export default AuthForm;