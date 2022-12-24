import React from "react";
import MenuContainer from "../containers/MenuContainer";
import { routes } from "../router/Route";

const Pages = () => {
  return (
    <>
      <MenuContainer />
      {routes}
    </>
  );
};

export default Pages;
