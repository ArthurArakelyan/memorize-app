import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import useOutsideClick from "../../../../hooks/useOutsideClick";

import {changeUserEmailAction, changeUserFieldAction} from "../../../../store/user/actions";

import "./styles.scss";

const Field = ({field, editing, setEditing}) => {
  const dispatch = useDispatch();

  const user = useSelector(({userReducer}) => userReducer);
  const isLoading = useSelector(({uiReducer}) => uiReducer);

  const fieldValue = user[field.name];
  const isEditing = editing === field.name;

  const [editingValue, setEditingValue] = useState(fieldValue);

  const handleEdit = () => {
    if(!isLoading) {
      setEditing(field.name);
    }
  }

  const handleCancel = () => {
    setEditing(null);
    setEditingValue(fieldValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isLoading) return false;

    if(editingValue.trim() === fieldValue) {
      handleCancel();
      return false;
    }

    if(field.name === 'email') {
      dispatch(changeUserEmailAction(editingValue.trim()));
      return false;
    }

    dispatch(changeUserFieldAction(field.name, editingValue.trim()));
  }

  useEffect(handleCancel, [fieldValue]);

  const ref = useOutsideClick(() => {
    if(editing) {
      handleCancel();
    }
  });

  return (
    <div className="profile-edit__field" ref={isEditing ? ref : null}>
      <div className="profile-edit__field_name_wrapper">
        {isEditing ?
          <form onSubmit={handleSubmit} className="profile-edit__field_name_form">
            <input
              autoFocus
              className="profile-edit__field_name_form_input"
              type={field.type}
              value={editingValue}
              onChange={({target: {value}}) => setEditingValue(value)}
              name={field.name}
            />
          </form>
          :
          <p className="profile-edit__field_name">
            {fieldValue}
          </p>
        }
        <div className="profile-edit__field_name_buttons">
          {isEditing ?
            <>
              <button
                onClick={handleSubmit}
                className="profile-edit__field_name_button save"
                disabled={isLoading}
              >
                <i className="far fa-save" />
              </button>
              <button
                onClick={handleCancel}
                className="profile-edit__field_name_button cancel"
                disabled={isLoading}
              >
                <i className="fas fa-times" />
              </button>
            </>
            :
            <button
              onClick={handleEdit}
              className="profile-edit__field_name_button edit"
              disabled={isLoading}
            >
              <i className="fas fa-pencil-alt" />
            </button>
          }
        </div>
      </div>
      <label className="profile-edit__field_label" htmlFor={field.name}>
        {field.label}
      </label>
    </div>
  );
}

export default Field;