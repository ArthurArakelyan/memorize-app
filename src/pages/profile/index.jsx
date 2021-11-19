import {useDispatch, useSelector} from "react-redux";

import Main from "../../components/common/Main";
import Fields from "./Fields";

import {setUserImgAction, deleteUserImgAction} from "../../store/user/actions";

import avatar from "../../assets/images/avatar.jpg";

import "./styles.scss";

const Profile = () => {
  const dispatch = useDispatch();

  const {firstName, lastName, imgUrl} = useSelector(({userReducer}) => userReducer);

  const handleAvatarRemove = () => {
    dispatch(deleteUserImgAction());
  }

  const handleAvatarChange = ({target: {files}}) => {
    if((files && files[0])
      && (files[0].type.includes('image') || files[0].type.includes('gif'))
      && files[0].size <= 5000000
    ) {
      dispatch(setUserImgAction(files[0]));
    } else if(files[0].size > 5000000) {
      alert('No more 5MB file size!');
    } else if(!files[0].type.includes('image') || !files[0].type.includes('gif')) {
      alert('Only image type files');
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
              <div className="profile-info__card">
                <h3 className="profile-info__card_name">
                  {`${firstName} ${lastName}`}
                </h3>
              </div>
            </div>
            <div className="profile-edit">
              <h3 className="profile-edit__heading">Edit Profile</h3>
              <Fields />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Profile;