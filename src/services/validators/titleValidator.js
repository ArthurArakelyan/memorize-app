function titleValidator() {
  return this.title.trim() && this.title.trim().length <= 40;
}

export default titleValidator;