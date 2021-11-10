import "./styles.scss";

const PrimaryButton = ({children, className, ...other}) => {
  return (
    <button {...other} className={`button-primary ${className}`}>
      {children}
    </button>
  );
}

export default PrimaryButton;