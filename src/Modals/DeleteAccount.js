import React, { useState } from "react";

const DeleteAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [confirmStep, setConfirmStep] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Open modal
  const handleOpenModal = () => {
    setShowModal(true);
    setConfirmStep(false); // Reset to initial step
    setPassword(""); // Clear password input
    setError(""); // Clear errors
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Proceed to password confirmation step
  const handleProceed = () => {
    setConfirmStep(true);
  };

  // Final delete action
  const handleDeleteAccount = () => {
    const storedPassword = localStorage.getItem("userPassword");

    if (password.trim() !== storedPassword) {
      setError(
        "Incorrect password. Please enter the correct password to delete your account."
      );
      return;
    }

    // Clear all localStorage data
    localStorage.clear();

    // Reset UI state
    setShowModal(false);
    setConfirmStep(false);
    setPassword("");

    // Redirect or refresh (optional)
    window.location.reload();
  };

  return (
    <div className="delete-account-container">
      <button
        onClick={handleOpenModal}
        className="bg-red-600 text-white p-3 rounded-md"
      >
        Delete My Account
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-60 text-center">
            {!confirmStep ? (
              <>
                <h2 className="text-xl font-bold text-red-600">Warning!</h2>
                <p className="mt-2 text-gray-600">
                  Are you sure you want to delete your account? All your data
                  will be permanently erased and this action cannot be undone.
                </p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handleCloseModal}
                    className="bg-gray-400 text-white p-2 rounded-md w-1/3"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleProceed}
                    className="bg-red-600 text-white p-2 rounded-md w-1/3"
                  >
                    Proceed
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">Confirm Your Password</h2>
                <p className="mt-2 text-gray-600">
                  Enter your password to permanently delete your account.
                </p>
                <input
                  type="password"
                  className="border p-2 w-full mt-4 rounded-md"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handleCloseModal}
                    className="bg-gray-400 text-white p-2 rounded-md w-1/3"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="bg-red-600 text-white p-2 rounded-md w-1/3"
                  >
                    Delete My Account
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
