import {useState, useRef} from "react";
import {useDispatch} from "react-redux";

import Main from "../../components/common/Main";
import Memories from "../../components/Memories";

import {setMemory} from "../../store/memories/actions";

import {isValid, validate} from "../../services/validators";

import homeGroups from "../../constants/homeGroups";

import "./styles.scss";

const Home = () => {
  const dispatch = useDispatch();

  const titleInputRef = useRef(null);

  const [data, setData] = useState({
    title: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({target: {name, value}}) => {
    setData((data) => ({
      ...data,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if(validate(data)) {
      setData({title: '', description: ''});
      dispatch(setMemory({
        ...data,
        date: Date.now()
      }));
      setSubmitted(false);
    }
  }

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
            <form onSubmit={handleSubmit} className="home-form">
              {homeGroups.map(({name, label}) => {
                const valid = !isValid(name, data) && submitted ? 'invalid' : '';
                return (
                  <div key={name} className={`home-form__group ${valid}`}>
                    {name === 'title' ?
                      <input
                        ref={titleInputRef}
                        className="home-form__group_input"
                        type="text"
                        value={data[name]}
                        onChange={handleChange}
                        name={name}
                        id={name}
                      />
                      :
                      <textarea
                        className="home-form__group_input home-form__group_textarea"
                        value={data[name]}
                        onChange={handleChange}
                        onKeyDown={(e) => {
                          if(e.keyCode === 13 && !e.shiftKey) {
                            handleSubmit(e);
                          }
                        }}
                        name={name}
                        id={name}
                      />
                    }
                    <label className="home-form__group_label" htmlFor={name}>{label}</label>
                  </div>
                )
              })}
              <button className="home-form__submit">post</button>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;