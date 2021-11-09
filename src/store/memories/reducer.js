const initialState = {
  memories: []
};

const memoriesReducer = (state = initialState, action = {}) => {
  const {type} = action;

  switch(type) {
    default:
      return state;
  }
}

export default memoriesReducer;