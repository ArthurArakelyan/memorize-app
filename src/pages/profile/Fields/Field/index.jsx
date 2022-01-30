import {useState, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import useOutsideClick from "../../../../hooks/useOutsideClick";

import {changeUserEmailAction, changeUserFieldAction} from "../../../../store/user/actions";

import {emailValidator} from "../../../../util/validators";

import "./styles.scss";

const Field = ({field, editing, setEditing}) => {
  const dispatch = useDispatch();

  const user = useSelector(({userReducer}) => userReducer);
  const isLoading = useSelector(({uiReducer}) => uiReducer);

  const fieldValue = useMemo(() => user[field.name], [user, field.name]);
  const isEditing = useMemo(() => editing === field.name, [editing, field]);

  const [editingValue, setEditingValue] = useState(fieldValue);
  const [error, setError] = useState({
    error: false,
    message: '',
  });

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

    if(editingValue.trim() === fieldValue || !editingValue.trim()) {
      handleCancel();
      return false;
    }

    if(field.name === 'email') {
      if(!emailValidator(editingValue)) {
        alert('Please enter a valid email');
        handleCancel();
        return false;
      }

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
      <label className="label profile-edit__field_label" htmlFor={field.name}>
        {field.label}
      </label>
      <div className="profile-edit__field_name_wrapper">
        {isEditing ?
          <form onSubmit={handleSubmit} className="profile-edit__field_name_form">
            <input
              className="profile-edit__field_name_form_input"
              type={field.type}
              value={editingValue}
              onChange={({target: {value}}) => setEditingValue(value)}
              name={field.name}
              autoFocus
            />
          </form>
          :
          <p className="profile-edit__field_name" onClick={handleEdit}>
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
    </div>
  );
}

export default Field;