const objectToArray = (object) => {
  if(!object) {
    return [];
  }

  return Object.entries(object).map(([id, item]) => {
    return {
      id,
      ...item
    }
  });
}

export default objectToArray;