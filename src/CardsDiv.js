import React from "react";
import card1 from "./card-image-4.png";
import card2 from "./card-image8.avif";
import "./cards.css";

const CardsDiv = () => {
  return (
    <>
      <section className="box-container flex gap-10">
        <div className="card card1">
          <h2 className="box-title">Balance</h2>
          <h1 className="number">$35,600.89</h1>
          <p className="text-[20px] pt-3 text-end">**** **** **** 1234</p>
          <div className="">
            <ul className=" flex gap-14 pt-12">
              <li className="">
                <h4 className="uppercase">Valid Thu</h4>
                <p className="font-semibold">08/26</p>
              </li>
              <li className="">
                <h4 className="uppercase">Card Holder</h4>
                <p className="font-semibold">Mmesoma Constance</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card card2">
          <h2 className="box-title">Balance</h2>
          <h1 className="number">$23,000.77</h1>
          <p className="text-[20px] pt-3 text-end">**** **** **** 1234</p>
          <div className="">
            <ul className=" flex gap-14 pt-12">
              <li className="">
                <h4 className="uppercase">Valid Thu</h4>
                <p className="font-semibold">08/26</p>
              </li>
              <li className="">
                <h4 className="uppercase">Card Holder</h4>
                <p className="font-semibold">Mmesoma Constance</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <button className="bg-[gold] text-[brown] p-3 px-10 font-semibold text-lg rounded-xl shadow-md">
            New Card
          </button>
        </div>
      </section>
    </>
  );
};

export default CardsDiv;
