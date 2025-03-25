import React, { useState } from "react";
import Toast from "../components/Toast";
import Login from "../auth/login";
import AccessibleTable from "../components/Table/Table";
import Modal from "../components/Modal/Modal";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from "../store/ProductSlice";


const Home = () => {
  const count = useSelector((state) => state.product.value);
  const dispatch = useDispatch()
  const [m1,setM1] = useState(false)
  const [m2,setM2] = useState(false)

  return (
    <>
 
    </>
  );
};

export default Home;
