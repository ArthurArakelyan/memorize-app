import {emailValidator} from "../util/validators";

const signUpGroups = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name',
    validations: [
      {
        required: true,
        message: 'First name is required',
      },
    ],
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    validations: [
      {
        required: true,
        message: 'Last name is required',
      },
    ],
  },
  {
    name: 'email',
    type: 'email',
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
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    validations: [
      {
        custom: (value, data) => {
          if(data && data.hasOwnProperty('password')) {
            return value === data.password;
          }

          return false;
        },
        message: 'Must match your password',
      },
    ],
  }
];

export default signUpGroups;