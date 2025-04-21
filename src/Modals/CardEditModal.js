import React, { useState, useEffect } from "react";
import CardPreview from "./CardPreview";

const CardEditModal = ({ card, onSave, onClose }) => {
  const [data, setData] = useState({ ...card });
  const [isValid, setIsValid] = useState(false);

  // Format card number by adding spaces every 4 digits
  const formatCardNumber = (num) => {
    return num.replace(/\D/g, "") // Remove non-digit characters
              .replace(/(\d{4})(?=\d)/g, "$1 "); // Add space every 4 digits
  };

  // Check if the card number is between 13 and 19 digits
  const isCardNumberValid = (cardNumber) => {
    const digits = cardNumber.replace(/\D/g, ""); // Remove spaces and non-digit characters
    return digits.length >= 13 && digits.length <= 19;
  };

  // Check if the expiry date is not in the past
  const isExpiryValid = (expiry) => {
    // Check if the expiry date is in the format MM/YY
    const [month, year] = expiry.split("/").map((item) => parseInt(item, 10));

    if (month < 1 || month > 12 || isNaN(month) || isNaN(year)) {
      return false;
    }

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed in JavaScript
    const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits of the year

    // If the year is less than the current year, it's invalid
    if (year < currentYear) return false;

    // If the year is the current year, check the month
    if (year === currentYear && month < currentMonth) return false;

    return true; // Valid expiry date
  };

  // Compare current input with original card
  const hasChanges = () => {
    return (
      data.image !== card.image ||
      data.balance !== card.balance ||
      data.cardNumber !== card.cardNumber ||
      data.bank !== card.bank ||
      data.holder !== card.holder ||
      data.expiry !== card.expiry
    );
  };

  const isNotEmpty = () => {
    return (
      data.image &&
      data.balance &&
      data.cardNumber &&
      data.bank &&
      data.holder &&
      data.expiry
    );
  };

  useEffect(() => {
    // Update button validation when data changes
    setIsValid(
      hasChanges() &&
        isNotEmpty() &&
        isCardNumberValid(data.cardNumber) &&
        isExpiryValid(data.expiry)
    );
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      setData((prev) => ({ ...prev, [name]: formatCardNumber(value) }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    if (isValid) {
      data.balance = parseFloat(data.balance);
      onSave(data);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-lg font-bold text-yellow-600">Edit Card</h2>

        {/* Live Preview */}
        <CardPreview
          image={data.image}
          balance={data.balance}
          cardNumber={data.cardNumber}
          bank={data.bank}
          holder={data.holder}
          expiry={data.expiry}
        />

     
        <input
          name="balance"
          type="number"
          value={data.balance}
          onChange={handleChange}
          placeholder="Balance"
          className="border p-2 w-full border-yellow-600"
        />
        <input
          name="cardNumber"
          value={data.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="border p-2 w-full border-yellow-600"
        />
        <input
          name="bank"
          value={data.bank}
          onChange={handleChange}
          placeholder="Bank Name"
          className="border p-2 w-full border-yellow-600"
        />
        <input
          name="expiry"
          value={data.expiry}
          onChange={handleChange}
          placeholder="Expiry Date (MM/YY)"
          className="border p-2 w-full border-yellow-600"
        />
        <input
          name="holder"
          value={data.holder}
          onChange={handleChange}
          placeholder="Card Holder"
          className="border p-2 w-full border-yellow-600"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button
            onClick={handleSave}
            disabled={!isValid}
            className={`px-4 py-2 rounded text-white ${
              isValid ? "bg-yellow-500 hover:bg-yellow-600" : "bg-yellow-600 opacity-60 cursor-not-allowed"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEditModal;
