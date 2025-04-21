import React from "react";

const CardPreview = ({ image, balance, cardNumber, bank, holder, expiry }) => {
  return (
    <div
      className="w-[370px] h-[200px] rounded-2xl p-6 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

  <div className="flex justify-between">
              <div>
                <p>Balance</p>
                <h2 className="text-xl font-bold">${balance.toLocaleString()}</h2>
              </div>
              <p>{bank}</p>
            </div>
            <p className="text-end mt-4 font-semibold text-lg">{cardNumber}</p>
            <div className="flex justify-between mt-5 text-sm">
              <div>
                <p>Valid Thru</p>
                <p>{expiry}</p>
              </div>
              <div>
                <p>Card Holder</p>
                <p>{holder}</p>
              </div>
            </div>

      {/* <div className="flex flex-col justify-between h-full">
        <div className="text-right">
          <p className="text-sm font-semibold">Balance</p>
          <p className="text-lg font-bold">${balance.toLocaleString()}</p>
        </div>
        <div className="text-left">
          <p className="text-sm tracking-wider">{cardNumber}</p>
          <div className="flex justify-between mt-2 text-xs">
            <span>{bank}</span>
            <span>{expiry}</span>
          </div>
          <p className="mt-2 text-sm font-semibold">{holder}</p>
        </div>
      </div> */}
    </div>
  );
};

export default CardPreview;
