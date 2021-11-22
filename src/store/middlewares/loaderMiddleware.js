import { startLoading, stopLoading } from "../ui/actions";

const loaderMiddleware = (store) => (next) => async (action) => {
  const nextAction = next(action);

  if(nextAction instanceof Promise) {
    const toggleLoading = (state) => {
      state ? store.dispatch(startLoading()) : store.dispatch(stopLoading());
    };

    toggleLoading(true);
    return (async () => {
      try {
        const response = await nextAction;
        toggleLoading(response);
        return await nextAction;
      } catch(e) {
        toggleLoading(false);
        throw Error(e);
      }
    })();
  }
  return nextAction;
};

export default loaderMiddleware;