import React, { useState, useEffect } from "react";

const SettingLinks = ({ setActiveTab, activeTab }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmStep, setConfirmStep] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  // Check if the account is locked from previous failed attempts
  useEffect(() => {
    const lockTime = localStorage.getItem("lockTime");
    if (lockTime) {
      const remainingTime = Math.ceil((parseInt(lockTime) - Date.now()) / 1000);
      if (remainingTime > 0) {
        setIsLocked(true);
        setTimeLeft(remainingTime);
      } else {
        localStorage.removeItem("lockTime");
        setIsLocked(false);
      }
    }
  }, []);

  // Timer countdown for locked account
  useEffect(() => {
    if (isLocked && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        if (timeLeft <= 1) {
          setIsLocked(false);
          localStorage.removeItem("lockTime");
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isLocked, timeLeft]);

  // Format time into MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  // Open modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setConfirmStep(false);
    setPassword("");
    setError("");
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Proceed to password confirmation step
  const handleProceed = () => {
    setConfirmStep(true);
  };

  // Final delete action
  const handleDeleteAccount = () => {
    if (isLocked) return; // Prevent action if locked

    const storedPassword = localStorage.getItem("userPassword");

    if (password.trim() !== storedPassword) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 5) {
        setError("⛔ Too many failed attempts. Try again in 5 minutes.");
        const lockExpiration = Date.now() + 5 * 60 * 1000; // 5 minutes
        localStorage.setItem("lockTime", lockExpiration);
        setIsLocked(true);
        setTimeLeft(300); // 5 minutes in seconds
      } else {
        setError("❌ Incorrect password. Please try again.");
      }
      return;
    }

    // Clear all localStorage data
    localStorage.clear();

    // Close modal and reset state
    setIsModalOpen(false);
    setConfirmStep(false);
    setPassword("");
    setAttempts(0); // Reset attempts on success

    // Redirect user (optional)
    window.location.href = "/";
  };

  return (
    <>
      <section className="setting-container">
        <div className="setting-heading">
          <h1 className="font-bold text-xl">Account Settings</h1>
        </div>
        <div className="mt-5">
          <ul className="flex flex-col gap-3 setting-progress text-[18px]">
            <li
              className={`px-4 p-2 w-full cursor-pointer transition-colors ${
                activeTab === "profile"
                  ? "bg-yellow-700 text-white"
                  : "hover:font-semibold"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Profile Settings
            </li>
            <li
              className={`px-4 p-2 w-full cursor-pointer transition-colors ${
                activeTab === "password"
                  ? "bg-yellow-700 text-white"
                  : "hover:font-semibold"
              }`}
              onClick={() => setActiveTab("password")}
            >
              Password
            </li>
            <li>
              <button
                onClick={handleOpenModal}
                className="text-red-600 hover:font-bold cursor-pointer"
              >
                Delete Account
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* Delete Account Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-[400px] text-center">
            {!confirmStep ? (
              <>
                <h2 className="text-xl font-bold text-red-600">⚠ Warning!</h2>
                <p className="mt-2 text-gray-600">
                  You are about to permanently delete your account and all
                  stored data. This action cannot be undone. If you wish to
                  proceed, confirm below.
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
                  className="border border-yellow-700 p-3 w-full mt-4 rounded-md"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLocked}
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {isLocked && (
                  <p className="text-yellow-600 mt-2">
                    ⏳ Please wait {formatTime(timeLeft)} before trying again.
                  </p>
                )}
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={handleCloseModal}
                    className="bg-gray-400 text-white p-2 px-6 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className={`p-2 px-6 rounded-md ${
                      isLocked || password.trim() === ""
                        ? "bg-red-600 opacity-50 cursor-not-allowed"
                        : "bg-red-600 text-white"
                    }`}
                    disabled={isLocked || password.trim() === ""}
                  >
                    Delete My Account
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SettingLinks;
