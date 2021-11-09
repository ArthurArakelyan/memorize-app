import AuthForm from "./AuthForm";

import "./styles.scss";

const Auth = ({type, data, submitted, groups, handleSubmit, handleChange}) => {
  return (
    <div className="auth">
      <div className="auth-content">
        <div className="auth-form__wrapper">
          <h2 className="auth-form__heading">{type}</h2>
          <AuthForm
            groups={groups}
            data={data}
            submitted={submitted}
            type={type}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Auth;