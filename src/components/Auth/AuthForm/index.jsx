import {Link} from "react-router-dom";

import AuthFormGroup from "./AuthFormGroup";
import PrimaryButton from "../../common/PrimaryButton";

import "./styles.scss";

const AuthForm = ({groups, type, data, submitted, handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {groups.map((group) => {
        return <AuthFormGroup
          key={group.name}
          value={data[group.name]}
          data={data}
          group={group}
          submitted={submitted}
          handleChange={handleChange}
        />;
      })}
      <PrimaryButton className="auth-form__submit">{type}</PrimaryButton>
      <Link to={`/${type === 'Sign In' ? 'signUp' : 'signIn'}`} className="auth-form__link">
        {type === 'Sign In' ? 'Sign Up' : 'Sign In'}
      </Link>
    </form>
  );
}

export default AuthForm;