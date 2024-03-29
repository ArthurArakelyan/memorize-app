import {memo} from "react";

import "./styles.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="lds-dual-ring" />
    </div>
  );
}

export default memo(Loader);