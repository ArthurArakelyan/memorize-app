import {useState} from "react";
import Field from "./Field";

import profileEditFields from "../../../constants/profileEditFields";

import "./styles.scss";

const Fields = () => {
  const [editing, setEditing] = useState(null);

  return (
    <div className="profile-edit__fields">
      {profileEditFields.map((field) =>
        <Field
          key={field.name}
          editing={editing}
          setEditing={setEditing}
          field={field}
        />
      )}
    </div>
  );
}

export default Fields;