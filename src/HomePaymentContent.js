import React from "react";
import "./payments.css";

const HomePaymentContent = () => {
  return (
    <>
      <section className="payment-section-content">
        <section className="payment-container">
          <div class="payment-circle-container">
            <div class="payment-circle"></div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center bg-white shadow px-8 py-3 rounded-lg">
              <h1 className="text-6xl font-semibold text-[#00a8ff]">7</h1>
              <ul className="flex gap-14 items-center">
                <li className="text-[15px]">
                  EXPECTED <br /> PAYMENTS{" "}
                </li>
                <li>
                  <span className="text-sm">Total</span>
                  <h2 className="text-[27px] font-semibold">$53,050.99</h2>
                </li>
                {/* <li className="">DUE <br/> REPAYMENT</li> */}
              </ul>
            </div>{" "}
            <div className="flex gap-3 items-center bg-white shadow px-8 py-3 rounded-lg">
              <h1 className="text-6xl font-semibold text-[#ff6b6b]">3</h1>
              <ul className="flex gap-14 items-center">
                <li className="text-[15px]">
                  DUE <br /> PAYMENTS{" "}
                </li>
                <li>
                  <span className="text-sm">Total</span>
                  <h2 className="text-[27px] font-semibold">$12,760.00</h2>
                </li>
                {/* <li className="">DUE <br/> REPAYMENT</li> */}
              </ul>
            </div>
          </div>
        </section>

        <div className="expected-container">
          <div className="px-8 py-4 flex justify-between bg-[#ffd90031]">
            <h1 className="font-bold text-2xl">Expected Payments</h1>
            <button className="bg-[gold] p-2 px-8 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
              Add
            </button>
          </div>
          <table className="expected-payment-table">
            <tbody>
              <tr className="due">
                <td>
                  <h2>
                    <h3>August 5th 2024</h3> <p>Netfix Subscription</p>
                  </h2>
                </td>
                <td>Due</td>

                <td className="font-semibold">$1,420.00</td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr className="due">
                <td>
                  <h2>
                    <h3>August 5th 2024</h3> <p>Student Loan</p>
                  </h2>
                </td>
                <td>Due</td>

                <td className="font-semibold">$1,420.00</td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr className="due">
                <td>
                  <h2>
                    <h3>August 5th 2024</h3> <p>House Rent</p>
                  </h2>
                </td>
                <td>Due</td>

                <td className="font-semibold">$1,420.00</td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr className="">
                <td>
                  <h2>
                    <h3>August 5th 2024</h3> <p>Spotify Subcription</p>
                  </h2>
                </td>
                <td>Upcoming</td>

                <td className="font-semibold">$1,420.00</td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr className="">
                <td>
                  <h2>
                    <h3>August 5th 2024</h3> <p>Gym Membership</p>
                  </h2>
                </td>
                <td>Upcoming</td>

                <td className="font-semibold">$1,420.00</td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr className="">
                <td>
                  <h2>
                    <h3>August 5th 2024</h3> <p>Electricity Bills</p>
                  </h2>
                </td>
                <td>Upcoming</td>

                <td className="font-semibold">$1,420.00</td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Pay Now
                  </button>
                </td>
              </tr>
              <tr className="">
                <td>
                  <h2>
                    <h3>August 5th 2024</h3> <p>Credit Card Payment</p>
                  </h2>
                </td>
                <td>Upcoming</td>

                <td className="font-semibold">$1,420.00</td>
                <td>
                  <button className="bg-[gold] p-2 px-5 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Pay Now
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

export default HomePaymentContent;
