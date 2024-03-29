import {useDispatch, useSelector} from "react-redux";

import Loader from "../../../components/common/Loader";

import {deleteUserImgAction, setUserImgAction} from "../../../store/user/actions";

import checkImageFile from "../../../util/checkImageFile";

const AvatarContent = ({imageLoaded, setImageLoaded}) => {
  const dispatch = useDispatch();

  const {url} = useSelector(({userReducer}) => userReducer.img);

  const handleAvatarRemove = () => {
    setImageLoaded(false);
    dispatch(deleteUserImgAction());
  }

  const handleAvatarChange = ({target: {files}}) => {
    checkImageFile(files, () => {
      setImageLoaded(false);
      dispatch(setUserImgAction(files[0]));
    });
  }

  if(!imageLoaded) {
    return <Loader />;
  }

  return (
    <>
      <div className="profile-info__avatar_buttons">
        {url &&
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
          <i className="far fa-camera-retro" />
        </label>
      </div>
    </>
  );
}

export default AvatarContent;