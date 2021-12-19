import {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

import {deleteMemoryAction} from "../../../../store/memories/actions";

import "./styles.scss";

const Memory = ({memory}) => {
  const {id, title, description, image} = memory;
  const dispatch = useDispatch();

  const isLoading = useSelector(({uiReducer}) => uiReducer);

  const date = useMemo(() => new Date(memory.date), [memory.date]);

  const handleDelete = useCallback(() => {
    if(!isLoading) {
      dispatch(deleteMemoryAction(id, image));
    }
  }, [isLoading, id, image]);

  return (
    <div className="home-memory">
      <button onClick={handleDelete} disabled={isLoading} className="home-memory__delete">
        <i className="fas fa-times" />
      </button>
      <div className="home-memory__header">
        <span title={title} className="home-memory__header_title">
          {title}
        </span>
      </div>
      {(image || description) &&
        <div className="home-memory__main">
          {image &&
            <a href={image} target="_blank" className="home-memory__image_wrapper">
              <img src={image} alt="Memory" className="home-memory__image" />
            </a>
          }

          {description &&
            <p className={`home-memory__description ${image ? 'image' : ''}`}>
              {description}
            </p>
          }
        </div>
      }
      <div className="home-memory__footer">
        <p className="home-memory__footer_date">{date.toLocaleDateString()}</p>
        <p className="home-memory__footer_date">{date.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default Memory;