import {memo} from "react";

import "./styles.scss";

const ButtonLoader = () => {
  return (
    <i className="button-primary__loader fas fa-sync" />
  );
}

export default memo(ButtonLoader);