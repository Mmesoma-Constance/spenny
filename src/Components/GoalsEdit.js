import { useEffect, useState } from "react";
import GoalWithdrawal from "../Modals/GoalWithdrawal";
import GoalDeleteModal from "../Modals/GoalDeleteModal";

const GoalsEdit = ({
  title,
  storageTitleKey,
  storagePriceKey,
  initialGoalPrice,
  saved,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [goalTitle, setGoalTitle] = useState(title);
  const [goalPrice, setGoalPrice] = useState(initialGoalPrice);
  const [goalPriceInputValue, setGoalPriceInputValue] =
    useState(initialGoalPrice);
  const [goalTitleInputValue, setGoalTitleInputValue] = useState(title);
  const [error, setError] = useState("");

  // load from local storage
  useEffect(() => {
    const savedGoalTitle = localStorage.getItem(storageTitleKey);
    const savedGoalPrice = localStorage.getItem(storagePriceKey);
    if (savedGoalTitle) {
      setGoalTitle(savedGoalTitle);
      setGoalTitleInputValue(savedGoalTitle);
    }
    if (savedGoalPrice) {
      setGoalPrice(Number(savedGoalPrice));
      setGoalPriceInputValue(Number(savedGoalPrice));
    }
  }, [storageTitleKey, storagePriceKey]);

  const handleSave = () => {
    if (goalPriceInputValue <= 0) {
      setError("goalPrice must be greater than 0");
      return;
    }
    setGoalTitle(goalTitleInputValue);
    setGoalPrice(goalPriceInputValue);
    localStorage.setItem(storageTitleKey, goalTitleInputValue);
    localStorage.setItem(storagePriceKey, goalPriceInputValue);
    setIsEditing(false);
    setError("");
  };

  const percentage = Math.min((saved / goalPrice) * 100, 100);

  const progressBarColor = () => {
    if (percentage < 50) return "bg-[#ff0000]";
    if (percentage < 80) return "bg-[#ffa500]";
    return "bg-[#09ed09]";
  };

  const [isPaymentsModalOpen, setIsPaymentsModalOpen] = useState(false);
  const [isGoalDeleteModalOpen, setIsGoalDeleteModalOpen] = useState(false);

  return (
    <div className="total-box  h-[215px]">
      {isEditing ? (
        <>
          <div className="flex justify-between">
            <input
              type="text"
              className="w-fit bg-gray-200 p-4 pl-4 rounded-lg text-base"
              value={goalTitleInputValue}
              onChange={(e) => setGoalTitleInputValue(e.target.value)}
            />

            <span className="text-sm ">12/06/25</span>
          </div>
          <div className="flex justify-between">
            <div>
              <input
                type="number"
                className="w-40 bg-gray-200 p-4 pl-4 rounded-lg my-2 text-xl"
                value={goalPriceInputValue}
                onChange={(e) => setGoalPriceInputValue(Number(e.target.value))}
              />
            </div>
            <button
              onClick={handleSave}
              className="text-sm cursor-pointer p-1.5 px-5 rounded-lg bg-gray-200 text-black h-8 hover:bg-gray-300"
            >
              Save Goal
            </button>
          </div>

          {error && <p className="text-sm mt-1 text-red-500">{error}</p>}

          <p className="text-base">Saved: ${saved.toLocaleString()}</p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <div className="bg-[#808080] h-3 w-full relative shadow-xl rounded-full">
              <div
                className={`h-full rounded-full ${progressBarColor()}`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="text-sm text-center">{Math.round(percentage)}%</div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between">
            <h2 className="">{goalTitle}</h2>
            <span className="text-sm ">12/06/25</span>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="number">${goalPrice.toLocaleString()}</h1>
              <p className="text-base">Saved: ${saved.toLocaleString()}</p>
            </div>
            <button
              onClick={() => {
                setGoalPriceInputValue(goalPrice);
                setIsEditing(true);
              }}
              className="text-sm cursor-pointer p-1.5 px-5 rounded-lg bg-gray-200 text-black h-8 hover:bg-gray-300"
            >
              Edit Goal
            </button>
          </div>

          <div className="flex justify-between items-center gap-2 mt-2">
            <div className="bg-[#808080] h-3 w-full relative shadow-xl rounded-full">
              <div
                className={`h-full rounded-full ${progressBarColor()}`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="text-sm text-center">{Math.round(percentage)}%</div>
          </div>
        </>
      )}

      <div className="flex gap-5 mt-5">
        <button
          onClick={() => setIsGoalDeleteModalOpen(true)}
          className="text-sm cursor-pointer p-1.5 px-5 rounded-lg bg-opacity-80  hover:bg-opacity-100 bg-red-500 text-white"
        >
          Delete Goal
        </button>

        <button
          onClick={() => setIsPaymentsModalOpen(true)}
          className="text-sm cursor-pointer p-1.5 px-5 rounded-lg bg-opacity-80  hover:bg-opacity-100 bg-yellow-600 text-white"
        >
          Withdraw Funds
        </button>
      </div>

      {/* Payments Modal */}
      {isPaymentsModalOpen && (
        <GoalWithdrawal
          isOpen={isPaymentsModalOpen}
          onClose={() => setIsPaymentsModalOpen(false)}
        />
      )}
      {/* Payments Modal */}
      {isGoalDeleteModalOpen && (
        <GoalDeleteModal
          isOpen={isGoalDeleteModalOpen}
          onClose={() => setIsGoalDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default GoalsEdit;
