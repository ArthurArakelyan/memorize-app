import "./styles.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="error-content">
        <h2 className="error-heading">
          Error!
        </h2>
        <p className="error-message">
          Please Check your internet connection.
        </p>
      </div>
    </div>
  );
}

export default Error;