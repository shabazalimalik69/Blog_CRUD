
import axios from "axios";
import { ADD_BLOG, DELETE_ALL_BLOGS, DELETE_BLOG, EDIT_BLOGS, GET_BLOGS } from "./blogActionTypes";

  
  export const getBlog = () => async (dispatch) => {
    try {
      const response = await axios.get(
        `https://blogbackend-bpuj.onrender.com/getBlogs`
      );
       //console.log(response.data);
      dispatch({ type: GET_BLOGS, payload: response.data});
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };


  
  export const createBlogAPI = (blog) => async (dispatch) => {
    console.log(blog)
    try {
      const response = await axios.post(
        "https://blogbackend-bpuj.onrender.com/createBlog",
        {blog}
      );
       console.log(response.data)
      //  console.log(userD);
      dispatch({ type: ADD_BLOG, payload: response.data });
    } catch (err) {
      console.log(err.message);
    }
  };



  export const updateBlog = (_id, blogData1) => async (dispatch) => {
    try {
      const response = await axios.patch(
        "https://blogbackend-bpuj.onrender.com/updateBlog/"+_id,
        blogData1
      );
      //console.log(response);
      dispatch({ type: EDIT_BLOGS, payload: response.data });
      dispatch(getBlog(null));
    } catch (err) {
      console.log(err.message);
    }
  };
  


  export const deleteBlog = (_id) => async (dispatch) => {
   // console.log(_id);
    try {
     await axios.delete("https://blogbackend-bpuj.onrender.com/deleteBlog/"+_id);     
      dispatch({ type: DELETE_BLOG });
      dispatch(getBlog(null));
    } catch (err) {
      console.log(err.message);
    }
  };



  export const deleteAllBlogs = () => async (dispatch) => {
    try {
      await axios.delete("https://blogbackend-bpuj.onrender.com/deleteAll");
      // console.log(response);
      dispatch({ type: DELETE_ALL_BLOGS });
      dispatch(getBlog(null));
    } catch (err) {
      console.log(err.message);
    }
  };
  