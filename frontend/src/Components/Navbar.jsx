
import {
  Box,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <Box display="flex" justifyContent="space-evenly" w="100%" h="80px" bg="teal" alignItems="center" color="white" fontWeight="bold" >
      <Link to="/">Home</Link>
      <Link to='/about'>About</Link>
      <Link to="/contact">Contact</Link>
    </Box>
  );
};

export default Navbar;
