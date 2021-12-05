import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Memory from "./Memory";
import Loader from "../../../components/common/Loader";

import {getMemories} from "../../../store/memories/actions";

import "./styles.scss";

const Memories = ({inputRef}) => {
  const dispatch = useDispatch();

  const {memories, loading, error} = useSelector(({memoriesReducer}) => memoriesReducer);

  useEffect(() => {
    if(!memories.length) {
      dispatch(getMemories());
    }
  }, []);

  const handleFocus = () => inputRef?.current?.focus();

  const errorContent = (
    <h3 className="home-memories__error">
      Error! Please check your internet connection.
    </h3>
  );

  if(loading && !error) {
    return <Loader />;
  } else if(error && !loading) {
    return errorContent;
  } else if((!loading && !error) && memories) {
    if(memories.length) {
      return (
        <div className="home-memories">
          {memories.map((memory) => <Memory key={memory.id} memory={memory} />)}
        </div>
      );
    }

    return (
      <h3 className="home-memories__empty">
        You aren't have memories. <button onClick={handleFocus}>Create new</button>
      </h3>
    );
  }

  return errorContent;
}

export default Memories;