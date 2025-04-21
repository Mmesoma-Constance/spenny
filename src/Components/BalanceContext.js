import React, { createContext, useEffect, useState } from "react";

export const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    return parseFloat(localStorage.getItem("balance")) || 42600.89;
  });

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

// export default BalanceContext
