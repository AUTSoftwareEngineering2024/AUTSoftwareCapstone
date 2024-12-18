import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

const reducer = (state, action) => {
  switch (
    action.type // switch statements are common in reducers
  ) {
    case "initPosts":
      return action.payload;
    case "addPosts":
      return [...state, action.payload];
    case "deletePostById":
      const newState = state.filter((posts) => posts.id !== action.payload);
      return newState;
    case "updatePostById":
      const copystate = [...state];
      const updatedPost = action.payload;
      console.log( "test2", updatedPost )
      const targetPostId = copystate.findIndex(
        (posts) => posts.id == updatedPost.id
      );
      copystate[targetPostId] = updatedPost;
      return copystate;
    default:
      return state;
  }
};

export const PostProvider = (props) => {
  // store the current user in state at the top level
  const [posts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:8081/api/posts");
      console.log('response',response)
      dispatch({ type: "initPosts", payload: response.data.data });
    getData();
  }, []);
  return (
    <PostContext.Provider value={{ posts, postDispatch: dispatch }}>
      {props.children}
    </PostContext.Provider>
  );
};
