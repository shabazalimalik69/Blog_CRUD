import { ADD_BLOG, DELETE_ALL_BLOGS, DELETE_BLOG, EDIT_BLOGS, GET_BLOGS } from "./blogActionTypes";

  
  const initialState = {
    blogData: [],
  };
  const blogReducer = (state = initialState, { type, payload }) => {
    //   console.log(payload);
    switch (type) {
      case GET_BLOGS: {
        return {
          ...state,
          blogData: payload,
        };
      }
      case ADD_BLOG: {
        return {
          ...state,
          blogBlog: [...state.blogData, payload],
        };
      }
      case EDIT_BLOGS: {
        //console.log('id',payload._id)
        return {
          ...state,
          blogData: [...state.blogData, payload],
        };
      }
      case DELETE_BLOG: {
        return {
          ...state,
        };
      }
      case DELETE_ALL_BLOGS: {
        return {
          ...state,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default blogReducer;
  