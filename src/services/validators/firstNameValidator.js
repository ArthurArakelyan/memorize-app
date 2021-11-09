function firstNameValidator() {
  return this.firstName.trim() && this.firstName.trim().length <= 50;
}

export default firstNameValidator;