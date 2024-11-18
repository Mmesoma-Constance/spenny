import React from "react";
import card1 from "./card-image-4.png";
import card2 from "./card-image8.avif";

const CardHomeContent = () => {
  return (
    <>
      <section className=" cards-content">
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
                  <h3>Card Holder</h3>{" "}
                  <h4 className="font-semibold">Mmesoma Constance</h4>
                </td>
                <td>
                  <h3>Valid</h3> <h4 className="font-semibold">12/05/2024</h4>
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
                  <h3>Card Holder</h3>{" "}
                  <h4 className="font-semibold">Mmesoma Constance</h4>
                </td>
                <td>
                  <h3>Valid</h3>{" "}
                  <h4 className="font-semibold text-red-600">
                    Expires in 2 weeks
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default CardHomeContent;
