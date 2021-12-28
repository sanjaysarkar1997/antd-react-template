import http from "../apis/instance";
import store from "../store";

const getAPI = async (url, config) => {
  try {
    store.dispatch({ type: "LOADING", payload: true });
    const res = await http.get(url, config);
    return res;
  } catch (error) {
    console.log(error);
  } finally {
    store.dispatch({ type: "LOADING", payload: false });
  }
};

const postAPI = async (url, data, config) => {
  try {
    store.dispatch({ type: "LOADING", payload: true });
    const res = await http.post(url, data, config);
    return res;
  } catch (error) {
    console.log(error);
  } finally {
    store.dispatch({ type: "LOADING", payload: false });
  }
};

// Export module
export { getAPI, postAPI };
