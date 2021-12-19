import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

import {deleteMemoryAction} from "../../../../store/memories/actions";

import "./styles.scss";

const Memory = ({memory}) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(({uiReducer}) => uiReducer);

  const date = useMemo(() => new Date(memory.date), [memory.date]);

  const handleDelete = () => {
    if(!isLoading) {
      dispatch(deleteMemoryAction(memory.id, memory.image));
    }
  }

  return (
    <div className="home-memory">
      <button onClick={handleDelete} disabled={isLoading} className="home-memory__delete">
        <i className="fas fa-times" />
      </button>
      <div className="home-memory__header">
        <span title={memory.title} className="home-memory__header_title">
          {memory.title}
        </span>
      </div>
      <div className="home-memory__main">
        {memory.image &&
        <a href={memory.image} target="_blank" className="home-memory__image_wrapper">
          <img src={memory.image} alt="Memory" className="home-memory__image" />
        </a>
        }

        {memory.description &&
        <p className={`home-memory__description ${memory.image ? 'image' : ''}`}>
          {memory.description}
        </p>
        }
      </div>
      <div className="home-memory__footer">
        <p className="home-memory__footer_date">{date.toLocaleDateString()}</p>
        <p className="home-memory__footer_date">{date.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default Memory;