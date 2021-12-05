const signUpGroups = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name',
    message: 'Please write correct first name'
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    message: 'Please write correct last name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    message: 'Please write correct email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    message: 'Minimum 6 symbols'
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    message: 'Must match your password'
  }
];

export default signUpGroups;