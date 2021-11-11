import {Navigate} from "react-router-dom";

import AuthForm from "./AuthForm";

import getUserFromLocalStorage from "../../util/getUserFromLocalStorage";

import "./styles.scss";

const Auth = ({type, data, setData, submitted, groups, handleSubmit}) => {
  if(getUserFromLocalStorage()) {
    return <Navigate to="/" />;
  }

  const handleChange = ({target: {name, value}}) => {
    setData((data) => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <div className="auth">
      <div className="auth-content">
        <div className="auth-form__wrapper">
          <h2 className="auth-form__heading">{type.name}</h2>
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