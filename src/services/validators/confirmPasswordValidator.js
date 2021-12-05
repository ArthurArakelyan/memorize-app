function confirmPasswordValidator() {
  if(!this.confirmPassword.trim()) return false;
  return this.confirmPassword === this.password;
}

export default confirmPasswordValidator;