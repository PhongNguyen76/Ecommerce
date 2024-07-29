import React, { Children } from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const DefaultComponent = ({ children }) => {
  console.log(Children);
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default DefaultComponent;
