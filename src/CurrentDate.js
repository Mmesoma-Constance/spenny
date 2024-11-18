import React from "react";

const CurrentDate = () => {
  const date = new Date();
  const formatDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return <div>{formatDate}</div>;
};

export default CurrentDate;
