import {useSelector} from "react-redux";

import Main from "../../components/common/Main";
import Fields from "./Fields";
import Avatar from "./Avatar";

import "./styles.scss";

const Profile = () => {
  const {firstName, lastName} = useSelector(({userReducer}) => userReducer);

  return (
    <Main>
      <div className="profile">
        <div className="container">
          <div className="profile-content">
            <div className="profile-info">
              <Avatar />
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