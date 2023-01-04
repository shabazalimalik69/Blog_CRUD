import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import style from "./Common.module.css";
import {createBlogAPI, deleteAllBlogs, deleteBlog, getBlog, updateBlog } from "../../Store/blog/blogActions";


const Home = () => {

  const [blog,setBlog] = useState("")
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [editHide, setEditHide] = useState(true);
 
  const { blogData } = useSelector((store) => store.blog);
  
  const [blogData1, setblogData1] = useState(blog);
  const dispatch = useDispatch();
  //console.log(blog)


  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setblogData1({
      ...blogData1,
      [name]: value,
    });
  };

  const isInvalid = blog === "";


  const handleCancel = () => {
    setEditHide(true);
    window.location.reload(true);
  };

  const handleCreate = () => {
    console.log(blog)
    dispatch(createBlogAPI(blog));
    setBlog("");
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };
  const handleUpdate = (id) => {
    dispatch(updateBlog(id, blogData1));
    window.location.reload(true);
  };
  const handleAllDelete = () => {
    dispatch(deleteAllBlogs());
  };

  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <>
      <Box className={style.container}>
        <Box className={style.sub_container}>
          <Button
          bg='green'
            type="button"
            onClick={() => setShow(true)}
            className={style.addbtn}>
            + Create Blog
          </Button>
          <FormControl className={show ? style.show_detail : style.hide_detail}>
            <Box className={style.form}>
              <Text className={style.closeIcon} onClick={handleCancel}>
                <CloseIcon />
              </Text>
              <Box className={style.column2}>
                <Text className={style.H1}>Create Blogs</Text>
                <Input
                 bg="white"
                 className={style.input}
                  onChange={(e)=>setBlog(e.target.value)}
                  value={blog}
                  name="blog"
                  type="text"
                  placeholder="Write Here...."
                />
                  <Button
                    onClick={() => {
                      handleCreate();
                    }}
                    display="block"
                       marginTop={4}
                        alignItems="flex-center"
                        color="white"
                        backgroundColor="green"
                        _hover={{
                          outline: "#FA5D00",
                          bgColor: "blue",
                        }}
                        _focus={{
                          outline: "#FA5D00",
                          bgColor: "blue",
                        }}
                        disabled={isInvalid}
                  >
                    Create
                  </Button>
            
              </Box>
            </Box>
          </FormControl>

          {/* ----------------------------------------------------------------------------------------- */}
          <Box className="show_added_data">
            {blogData?.map((elem) =>
              elem._id === editId ? (
                <FormControl
                  className={editHide ? style.hide_detail : style.show_detail}
                >
                  <Box className={style.form}>
                    <Box className={style.column1}>
                      <Text className={style.closeIcon} onClick={handleCancel}>
                        <CloseIcon />
                      </Text>
                      <Input
                        marginBottom={2}
                        onChange={handleChange1}
                        defaultValue={elem.blog}
                        name="blog"
                        type="text"
                        bg="white"
                        placeholder="Write Here...."
                      />

                     
                    </Box>

                    <Box>
                      <Button
                        display="inBlock"
                        marginRight={4}
                        marginBottom={4}
                        alignItems="flex-center"
                        color="white"
                        backgroundColor="green"
                        _hover={{
                          outline: "#FA5D00",
                          bgColor: "blue",
                        }}
                        _focus={{
                          outline: "#FA5D00",
                          bgColor: "blue",
                        }}
                        onClick={() => handleUpdate(elem._id)}
                        bg="green"
                        type="button"
                      >
                        Update
                      </Button>

                      <Button
                       marginBottom={4}
                       marginRight={4}
                        display="inBlock"
                        alignItems="flex-center"
                        color="white"
                        backgroundColor="brown"
                        _hover={{
                          outline: "#FA5D00",
                          bgColor: "red",
                        }}
                        _focus={{
                          outline: "#FA5D00",
                          bgColor: "red",
                        }}
                        onClick={() => {
                          handleDelete(elem._id);
                        }}
                        type="button"
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </FormControl>
              ) : (
                <Box marginTop={6} key={elem.id} className={style.show_elem}>
                  <Box w="15vw">
                    <p>{elem.blog}</p>
                  </Box>
                  <Text
                    className={style.edit_button}
                    onClick={() => {
                      handleEdit(elem._id);
                      setEditHide(false);
                    }}
                   
                  >
                   <EditIcon/>
                  </Text>
                </Box>
              )
            )}
            <Stack mt="20px" align="center">
              <Button
                type="button"
                display="block"
                alignItems="flex-center"
                color="white"
                backgroundColor="brown"
                _hover={{
                  outline: "#FA5D00",
                  bgColor: "red",
                }}
                _focus={{
                  outline: "#FA5D00",
                  bgColor: "red",
                }}
                onClick={handleAllDelete}
              >
                DELETE ALL
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
