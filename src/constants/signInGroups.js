import {emailValidator} from "../util/validators";

const signInGroups = [
  {
    name: 'email',
    type: 'text',
    label: 'Email',
    validations: [
      {
        required: true,
        message: 'Email is required',
      },
      {
        custom: emailValidator,
        message: 'Please write a correct email',
      },
    ],
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    validations: [
      {
        required: true,
        message: 'Password is required',
      },
      {
        min: 6,
        message: 'Minimum 6 symbols',
      },
    ],
  }
];

export default signInGroups;