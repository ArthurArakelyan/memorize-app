import {useState} from "react";
import {useSelector} from "react-redux";

import AvatarContent from "./AvatarContent";

import avatar from "../../../assets/images/avatar.jpg";

import "./styles.scss";

const Avatar = () => {
  const {url, loading, error} = useSelector(({userReducer}) => userReducer.img);

  const [imageLoaded, setImageLoaded] = useState(false);

  const imgUrl = url && !error ? url
    : error || (!url && !error) && !loading ? avatar
    : '';

  return (
    <div className={'profile-info__avatar_wrapper'}>
      <img
        src={imgUrl}
        onLoad={() => {
          if(!imageLoaded) {
            setImageLoaded(true);
          }
        }}
        alt="Avatar"
        className={`profile-info__avatar ${(!imageLoaded || loading) ? 'loading' : ''}`}
      />
      <AvatarContent imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
    </div>
  );
}

export default Avatar;