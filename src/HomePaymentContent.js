import React, { useState } from "react";
import "./payments.css";
import PaymentsPageModal from "./Modals/PaymentsPageModal";

const HomePaymentContent = () => {
  const [expectedBills, setExpectedBills] = useState([
    {
      name: "Electricity Bill",
      dueDate: "2025-06-05",
      status: "upcoming",
      amount: 1530,
    },
    {
      name: "House Rent",
      dueDate: "2025-06-05",
      status: "3 months left",
      amount: 14900,
    },
    {
      name: "Gym Membership",
      dueDate: "2025-06-05",
      status: "2 months left",
      amount: 14900,
    },
  ]);

  const [isPaymentsModalOpen, setIsPaymentsModalOpen] = useState(false);

  const handleAddBill = (newBill) => {
    setExpectedBills((prev) => [newBill, ...prev]);
    setIsPaymentsModalOpen(false);
  };

  return (
    <>
      <section className="payment-section-content">
        <section className="payment-container">
          <div class="payment-circle-container">
            <div class="payment-circle"></div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center bg-gray-200 shadow px-8 py-3 rounded-lg">
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
            <div className="flex gap-3 items-center bg-gray-200 shadow px-8 py-3 rounded-lg">
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
          <div className="px-8 py-4 flex justify-between bg-yellow-600 text-white">
            <h1 className="font-bold text-2xl">Expected Payments</h1>
            <button
              className="bg-white  p-2 px-8 text-[brown] font-semibold w-fit rounded-lg hover:bg-opacity-85"
              onClick={() => setIsPaymentsModalOpen(true)}
            >
              Add
            </button>
          </div>

          <table className="expected-payment-table">
            <tbody>
              {/* <tr className="due">
                <td>
                  <h2>
                    <h3>August 5th 2024</h3> <p>Netfix Subscription</p>
                  </h2>
                </td>
                <td>Due</td>

                <td className="font-semibold">$1,420.00</td>
                <td>
                  <button className="bg-yellow-600 p-2 px-5 text-white font-semibold w-fit rounded-lg hover:bg-opacity-85">
                    Pay Now
                  </button>
                </td>
              </tr> */}

              {expectedBills.map((bill, index) => (
                <tr key={index}>
                  <td className="">
                    <span className="text-sm text-yellow-600">
                      {" "}
                      {bill.dueDate}
                    </span>
                    <h2 className="text-[17px]">{bill.name}</h2>
                  </td>

                  <td className="text-center">{bill.status}</td>
                  <td>${bill.amount.toFixed(2)}</td>
                  <td>
                    <button className="bg-yellow-600 p-2 px-5 text-white font-semibold w-fit rounded-lg hover:bg-opacity-85">
                      Pay Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Payments Modal */}
          {isPaymentsModalOpen && (
            <PaymentsPageModal
              // isOpen={isPaymentsModalOpen}
              onClose={() => setIsPaymentsModalOpen(false)}
              onCreate={handleAddBill}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default HomePaymentContent;
