import ButtonLoader from "./Loader";

import "./styles.scss";

const PrimaryButton = ({loading, children, className = '', ...other}) => {
  return (
    <button
      {...other}
      disabled={loading}
      className={`button-primary ${loading ? 'loading' : ''} ${className}`}
    >
      {children}
      {loading && <ButtonLoader />}
    </button>
  );
}

export default PrimaryButton;