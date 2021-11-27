import {useState} from "react";
import {useDispatch} from "react-redux";

import Auth from "../../components/Auth";

import signUpGroups from "../../constants/signUpGroups";

import {signUp} from "../../store/auth/actions";

import {validate} from "../../services/validators";

const SignUp = () => {
  const dispatch = useDispatch();

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


    if(validate(data)) {
      dispatch(signUp(firstName, lastName, email, password));
    } else {
      setSubmitted(true);
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
        className: 'sign-up',
        link: '/login',
        linkName: 'Sign In'
      }}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignUp;