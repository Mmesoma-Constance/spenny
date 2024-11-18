import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeleteAccount() {
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    // Remove all account-related data from localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userPasswordConfirm");

    // Navigate to the signup page after deletion
    navigate("/signup");
  };

  return (
    <div className="delete-account-container">
      <button>Delete Account</button>
      <p>
        Are you sure you want to delete your account? This action cannot be
        undone.
      </p>

      {!confirmation ? (
        <button
          onClick={() => setConfirmation(true)}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Yes, Delete My Account
        </button>
      ) : (
        <div>
          <p>Are you really sure?</p>
          <button
            onClick={handleDeleteAccount}
            style={{ backgroundColor: "darkred", color: "white" }}
          >
            Confirm Delete
          </button>
          <button
            onClick={() => setConfirmation(false)}
            style={{ backgroundColor: "gray", color: "white" }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default DeleteAccount;
