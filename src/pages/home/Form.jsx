import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Form, PrimaryButton} from "../../components/common";

import {setMemory} from "../../store/memories/actions";

import validateFields from "../../util/validateFields";
import checkImageFile from "../../util/checkImageFile";

import homeGroups from "../../constants/homeGroups";

import "./styles.scss";

const MemoriesForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(({uiReducer}) => uiReducer);

  const [data, setData] = useState({
    title: '',
    description: ''
  });
  const [image, setImage] = useState(null);
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

    if(validateFields(data, homeGroups)) {
      dispatch(setMemory({
        ...data,
        image,
        date: Date.now()
      }));

      setData({title: '', description: ''});

      if(image) {
        setImage(null);
      }

      if(submitted) {
        setSubmitted(false);
      }
    } else {
      setSubmitted(true);
    }
  }

  const handleImageUpload = ({target: {files}}) => {
    checkImageFile(files, () => {
      setImage(files[0]);
    });
  }

  const handleDeleteImage = () => setImage(null);

  return (
    <Form onSubmit={handleSubmit} className="home-form">
      {homeGroups.map((group) => {
        const {name, label, validations, Component, required} = group;

        return (
          <Form.Group
            key={name}
            isRequired={required}
            name={name}
            label={label}
          >
            <Component
              type="text"
              value={data[name]}
              validations={validations}
              validate={submitted}
              onChange={handleChange}
              name={name}
              id={name}
            />
          </Form.Group>
        );
      })}

      <div className="home-form__image">
        {image ?
          <div className="home-form__image_info">
            <div className="home-form__image_info_icon_wrapper">
              <i onClick={handleDeleteImage} className="fas fa-times" />
            </div>
            <span>{image.name}</span>
          </div>
          :
          <label htmlFor="image" className="home-form__image_label">
            <span>Add Image</span>
            <i className="far fa-camera-retro" />
            <input onChange={handleImageUpload} className="home-form__image_input" id="image" type="file" />
          </label>
        }
      </div>
      
      <PrimaryButton className="home-form__submit" loading={isLoading}>
        post
      </PrimaryButton>
    </Form>
  );
}

export default MemoriesForm;