import React from "react";

const SubscriptionHomeContent = () => {
  return (
    <div className="subscribe-container">
      <h1 className="font-bold text-2xl py-2 p-8 pb-7 ">
        Subscription Summary
      </h1>

      <table className="subscribe-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Next Billing Date</th>
            <th>Frequency</th>
            <th>Auto Renewal</th>
            <th>Button Action</th>
          </tr>
        </thead>
        <br />
        <tbody>
          <tr className="">
            <td>
              <h4 className="font-semibold">Netflix</h4>
            </td>

            <td>
              <h4 className="font-semibold">$36.00</h4>
            </td>

            <td>
              <h4 className="font-semibold">Active</h4>
            </td>

            <td>
              <h4 className="font-semibold">12/05/2024</h4>
            </td>
            <td>
              <h4 className="font-semibold">Monthly</h4>
            </td>
            <td>
              <h4 className="font-semibold">Allowed</h4>
            </td>
            <td>
              <button className="bg-[gold] p-2 text-[15px] px-5 text-[brown] font-semibold w-52 rounded-lg hover:bg-opacity-85">
                Cancel Subscription
              </button>
            </td>
          </tr>

          <tr className="">
            <td>
              <h4 className="font-semibold">Apple</h4>
            </td>

            <td>
              <h4 className="font-semibold">$45.00</h4>
            </td>

            <td>
              <h4 className="font-semibold text-red-500">Expired</h4>
            </td>

            <td>
              <h4 className="font-semibold">12/05/2024</h4>
            </td>
            <td>
              <h4 className="font-semibold">Monthly</h4>
            </td>
            <td>
              <h4 className="font-semibold">Not Allowed</h4>
            </td>
            <td>
              <button className="bg-[gold] p-2 text-[15px] px-5 text-[brown] font-semibold w-52 rounded-lg hover:bg-opacity-85">
                Activate Subscription
              </button>
            </td>
          </tr>

          <tr className="">
            <td>
              <h4 className="font-semibold">Netflix</h4>
            </td>

            <td>
              <h4 className="font-semibold">$36.00</h4>
            </td>

            <td>
              <h4 className="font-semibold">Active</h4>
            </td>

            <td>
              <h4 className="font-semibold">12/05/2024</h4>
            </td>
            <td>
              <h4 className="font-semibold">Monthly</h4>
            </td>
            <td>
              <h4 className="font-semibold">Allowed</h4>
            </td>
            <td>
              <button className="bg-[gold] p-2 text-[15px] px-5 text-[brown] font-semibold w-52 rounded-lg hover:bg-opacity-85">
                Cancel Subscription
              </button>
            </td>
          </tr>

          <tr className="">
            <td>
              <h4 className="font-semibold">Apple</h4>
            </td>

            <td>
              <h4 className="font-semibold">$45.00</h4>
            </td>

            <td>
              <h4 className="font-semibold">Active</h4>
            </td>

            <td>
              <h4 className="font-semibold">12/05/2024</h4>
            </td>
            <td>
              <h4 className="font-semibold">Monthly</h4>
            </td>
            <td>
              <h4 className="font-semibold">Not Allowed</h4>
            </td>
            <td>
              <button className="bg-[gold] p-2 text-[15px] px-5 text-[brown] font-semibold w-52 rounded-lg hover:bg-opacity-85">
                Activate Subscription
              </button>
            </td>
          </tr>

          <tr className="">
            <td>
              <h4 className="font-semibold">Apple</h4>
            </td>

            <td>
              <h4 className="font-semibold">$45.00</h4>
            </td>

            <td>
              <h4 className="font-semibold text-red-500">Expired</h4>
            </td>

            <td>
              <h4 className="font-semibold">12/05/2024</h4>
            </td>
            <td>
              <h4 className="font-semibold">Monthly</h4>
            </td>
            <td>
              <h4 className="font-semibold">Not Allowed</h4>
            </td>
            <td>
              <button className="bg-[gold] p-2 text-[15px] px-5 text-[brown] font-semibold w-52 rounded-lg hover:bg-opacity-85">
                Activate Subscription
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionHomeContent;
