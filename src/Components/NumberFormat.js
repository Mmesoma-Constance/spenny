import React from "react";

const NumberFormat = (number) => {
  //   const parts = number.toFixed(2).split(".");
  //   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //   return parts.join(".");

  return number.toFixed(2);
  //   return new Intl.NumberFormat("en-US", {
  //     minimiumFractionDigits: 2,
  //     maximiumFractionDigits: 2,
  //   }).format(number);
};

export default NumberFormat;
