function passwordValidator() {
  return this.password.trim() && this.password.trim().length >= 6;
}

export default passwordValidator;
