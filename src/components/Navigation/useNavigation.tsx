import React, { useState } from "react";
const useNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const toggleDrawerHandler = () => {
    setOpenDrawer((prev) => !prev);
  };
  const closeDrawerHandler = () =>{
    setOpenDrawer(false); 
  }
  return { toggleDrawerHandler, openDrawer ,closeDrawerHandler };
};
export default useNavigation;
