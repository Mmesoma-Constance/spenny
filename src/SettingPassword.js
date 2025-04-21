import React, { useState, useEffect } from "react";

const SettingPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Disable button if any field is empty
  const isButtonDisabled = !oldPassword || !newPassword || !confirmPassword;

  const handlePasswordChange = () => {
    const storedPassword = localStorage.getItem("userPassword");

    if (oldPassword.trim() !== storedPassword) {
      setError("Old password is incorrect.");
      setSuccess("");
    } else if (newPassword === storedPassword) {
      setError("New password cannot be the same as the old password.");
      setSuccess("");
    } else if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      setSuccess("");
    } else {
      localStorage.setItem("userPassword", newPassword);
      setSuccess("Password changed successfully!");
      setError("");

      // Clear input fields
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }

    // Clear messages after 3 seconds
    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 3000);
  };

  return (
    <section className="setting-personal-information">
      <h1 className="font-bold text-2xl">Change Password</h1>

      <div className="border-2 mt-4 px-10 pt-4 pb-8 rounded-lg text-base">
        <ul className="mt-4 grid grid-cols-1 gap-8">
          <li>
            <label className="font-semibold py-1 text-lg">Old Password</label>
            <input
              type="password"
              className="w-full p-5 mt-2 pl-6 rounded-md bg-gray-200"
              placeholder="Enter old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </li>
          <li>
            <label className="font-semibold py-1 text-lg">New Password</label>
            <input
              type="password"
              className="w-full p-5 mt-2 pl-6 rounded-md bg-gray-200"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </li>
          <li>
            <label className="font-semibold py-1 text-lg">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full p-5 mt-2 pl-6 rounded-md bg-gray-200"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </li>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            className={`w-full p-3 px-8 rounded-lg ${
              isButtonDisabled
                ? "bg-yellow-600 text-white cursor-not-allowed opacity-50"
                : "bg-yellow-600 text-white"
            }`}
            onClick={handlePasswordChange}
            disabled={isButtonDisabled}
          >
            Change Password
          </button>
        </ul>
      </div>
    </section>
  );
};

export default SettingPassword;
