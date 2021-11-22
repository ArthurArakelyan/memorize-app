import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {isValid, validate} from "../../services/validators";

import {setMemory} from "../../store/memories/actions";

import homeGroups from "../../constants/homeGroups";

import "./styles.scss";

const Form = ({inputRef}) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(({uiReducer}) => uiReducer);

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
    if(isLoading) return false;

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
    <form onSubmit={handleSubmit} className="home-form">
      {homeGroups.map(({name, label}) => {
        const valid = !isValid(name, data) && submitted ? 'invalid' : '';
        return (
          <div key={name} className={`home-form__group ${valid}`}>
            {name === 'title' ?
              <input
                ref={inputRef}
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
      <button className="home-form__submit" disabled={isLoading}>post</button>
    </form>
  );
}

export default Form;