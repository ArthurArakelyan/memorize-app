import {useState} from "react";
import {useNavigate} from "react-router-dom";

import Auth from "../../components/Auth";

import signUpGroups from "../../constants/signUpGroups";

import {validate} from "../../services/validators";

import AuthApi from "../../services/api/AuthApi";

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email, password} = data;

    setSubmitted(true);

    if(validate(data)) {
      AuthApi.signUp(firstName, lastName, email, password)
        .then((res) => res ? navigate('/') : null);
    }
  }

  return (
    <Auth
      groups={signUpGroups}
      data={data}
      setData={setData}
      submitted={submitted}
      type={{
        name: 'Sign Up',
        link: '/signIn',
        linkName: 'Sign In'
      }}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignUp;