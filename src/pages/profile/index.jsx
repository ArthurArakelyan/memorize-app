import {useDispatch, useSelector} from "react-redux";

import Main from "../../components/common/Main";

import {setUserImgAction, deleteUserImgAction} from "../../store/user/actions";

import avatar from "../../assets/images/avatar.png";

import "./styles.scss";

const Profile = () => {
  const dispatch = useDispatch();

  const {firstName, lastName, email, imgUrl} = useSelector(({userReducer}) => userReducer);

  const handleAvatarRemove = () => {
    dispatch(deleteUserImgAction());
  }

  const handleAvatarChange = ({target: {files}}) => {
    if(files && files[0]) {
      dispatch(setUserImgAction(files[0]));
    }
  }

  return (
    <Main>
      <div className="profile">
        <div className="container">
          <div className="profile-content">
            <div className="profile-info">
              <div className="profile-info__avatar_wrapper">
                <img src={imgUrl ? imgUrl : avatar} alt="Avatar" className="profile-info__avatar" />
                <div className="profile-info__avatar_buttons">
                  {imgUrl &&
                    <button
                      className="profile-info__avatar_button profile-info__avatar_remove"
                      onClick={handleAvatarRemove}
                    >
                      <i className="fas fa-times" />
                    </button>
                  }
                  <label
                    className="profile-info__avatar_button profile-info__avatar_edit"
                    htmlFor="avatar-edit"
                  >
                    <input type="file" id="avatar-edit" onChange={handleAvatarChange} />
                    <i className="far fa-file-image" />
                  </label>
                </div>
              </div>
            </div>
            <div className="profile-fields">

            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Profile;