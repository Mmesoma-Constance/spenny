import React from "react";
import "./cards.css";
import card1 from "./card-image-4.png";
import card2 from "./card-image8.avif";

const Cards = () => {
  return (
    <>
      <section className=" cards-content">
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

        <div className="cards-container">
          <h1 className="font-bold text-2xl py-2 p-8 pb-4 ">Card List</h1>

          <table className="cards-table">
            <tbody>
              <tr className="">
                <td className="">
                  <img src={card1} alt="" />
                </td>
                <td>
                  <h3>Card Type</h3> <h4 className="font-semibold">Primary</h4>
                </td>

                <td>
                  <h3>Bank</h3> <h4 className="font-semibold">Sandaner</h4>
                </td>

                <td>
                  <h3>Card Number</h3>{" "}
                  <h4 className="font-semibold">5642 2496 7824</h4>
                </td>

                <td>
                  <h3>Valid</h3> <h4 className="font-semibold">12/05/2024</h4>
                </td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Remove Card
                  </button>
                </td>
              </tr>
              <br />
              <tr className="">
                <td className="">
                  <img src={card2} alt="" />
                </td>
                <td>
                  <h3>Card Type</h3>{" "}
                  <h4 className="font-semibold">Secondary</h4>
                </td>

                <td>
                  <h3>Bank</h3> <h4 className="font-semibold">CityBank</h4>
                </td>

                <td>
                  <h3>Card Number</h3>{" "}
                  <h4 className="font-semibold">7836 0582 4198</h4>
                </td>

                <td>
                  <h3>Valid</h3>{" "}
                  <h4 className="font-semibold text-red-600">
                    Expires in 2 weeks
                  </h4>
                </td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Remove Card
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Cards;
