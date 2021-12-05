import {useRef} from "react";

import {Main} from "../../components/common";
import Memories from "./Memories";
import Form from "./Form";

import "./styles.scss";

const Home = () => {
  const titleInputRef = useRef(null);

  return (
    <Main>
      <div className="home">
        <div className="container">
          <div className="home-content">
            <div className="home-memories__wrapper">
              <h2 className="home-memories__heading">
                Memories
              </h2>
              <Memories inputRef={titleInputRef} />
            </div>
            <Form inputRef={titleInputRef} />
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;