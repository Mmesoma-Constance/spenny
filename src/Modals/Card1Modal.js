import React, { useState, useEffect } from "react";
// import UploadingImg from "../UploadingImg";?

const Card1Modal = ({ isOpen, onClose, person, onSave }) => {
  const [editedPerson, setEditedPerson] = useState(person);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    setEditedPerson({ ...editedPerson, [e.target.name]: e.target.value });
  };

  // Validate inputs
  useEffect(() => {
    const { name, accountNumber, bank } = editedPerson;

    // Check if any field is empty or if the name exceeds 10 characters
    if (
      name.trim() === "" ||
      accountNumber.trim() === "" ||
      bank.trim() === "" ||
      name.length > 10
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [editedPerson]);

  const handleSave = () => {
    if (
      editedPerson.name.trim() === "" ||
      editedPerson.accountNumber.trim() === "" ||
      editedPerson.bank.trim() === ""
    ) {
      return; // Prevent saving if any field is empty
    }
    onSave(editedPerson);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[420px]">
        <h2 className="text-xl font-bold mb-4">Edit Person</h2>

        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-6 justify-between items-center">
            <img
              src={editedPerson.image}
              alt="Avatar"
              className="w-20 h-20 rounded-full mb-3 bg-gray-300 object-cover object-top"
            />
            <div className="flex flex-row gap-4">
              <button className="bg-yellow-600 opacity-80 hover:opacity-100 text-white px-4 py-1 rounded-lg h-fit">
                Add Image
              </button>
              <button
                onClick={onClose}
                className="bg-yellow-600 opacity-80 hover:opacity-100 text-white px-4 py-1 rounded-lg h-fit"
              >
                Use Avatar
              </button>{" "}
            </div>
          </div>

          <label htmlFor="" className="text-left w-full opacity-80">
            Nickname
          </label>
          <input
            type="text"
            name="name"
            value={editedPerson.name}
            onChange={handleChange}
            className="w-full bg-gray-200 p-3 rounded-lg mb-2"
            maxLength="8" // Enforce max length of 10 characters for name
          />

          <label htmlFor="" className="text-left w-full opacity-80">
            Account Number
          </label>
          <input
            type="text"
            name="accountNumber"
            value={editedPerson.accountNumber}
            onChange={handleChange}
            className="w-full bg-gray-200 p-3 rounded-lg mb-2"
          />

          <label htmlFor="" className="text-left w-full opacity-80">
            Bank Name
          </label>
          <input
            type="text"
            name="bank"
            value={editedPerson.bank}
            onChange={handleChange}
            className="w-full bg-gray-200 p-3 rounded-lg mb-2"
          />
        </div>

        <div className="flex gap-4 justify-between mt-4">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
            disabled={isButtonDisabled} // Disable the button if conditions are not met
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1Modal;
