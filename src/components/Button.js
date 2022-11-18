import React from "react";

export const Button = ({ lable, cls, handleOnClick }) => {
  return (
    <div className={"btn " + cls} onClick={() => handleOnClick(lable)}>
      {lable}
    </div>
  );
};
