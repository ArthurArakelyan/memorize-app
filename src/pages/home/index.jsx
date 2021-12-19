import {Main} from "../../components/common";
import Memories from "./Memories";
import Form from "./Form";

import "./styles.scss";

const Home = () => {
  return (
    <Main>
      <div className="home">
        <div className="container">
          <div className="home-content">
            <div className="home-memories__wrapper">
              <h2 className="home-memories__heading">
                Memories
              </h2>
              <Memories />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;