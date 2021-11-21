function descriptionValidator() {
  return this.description.trim() && this.description.trim().length <= 500;
}

export default descriptionValidator;