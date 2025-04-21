import { useEffect, useState } from "react";

const BudgetEdit = ({ title, storageKey, initialBudget, spent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [budget, setBudget] = useState(initialBudget);
  const [inputValue, setInputValue] = useState(initialBudget);
  const [error, setError] = useState("");

  // load from local storage
  useEffect(() => {
    const savedBudget = localStorage.getItem(storageKey);
    if (savedBudget) {
      setBudget(Number(savedBudget));
      setInputValue(Number(savedBudget));
    }
  }, [storageKey]);

  const handleSave = () => {
    if (inputValue <= 0) {
      setError("Budget must be greater than 0");
      return;
    }
    setBudget(inputValue);
    localStorage.setItem(storageKey, inputValue);
    setIsEditing(false);
    setError("");
  };

  const percentage = Math.min((spent / budget) * 100, 100);

  const progressBarColor = () => {
    if (percentage < 50) return "bg-[#09ed09]";
    if (percentage < 80) return "bg-[#ffa500]";
    return "bg-[#ff0000]";
  };

  return (
    <div className="total-box h-[173px]">
      {isEditing ? (
        <>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={handleSave}
              className="text-sm cursor-pointer p-1 px-5 rounded-lg bg-opacity-80 bg-yellow-600 text-white hover:bg-opacity-100"
            >
              Save
            </button>
          </div>
          <input
            type="number"
            className="w-40 bg-gray-200 p-4 pl-4 rounded-lg my-2 text-xl"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />

          {error && <p className="text-sm mt-1 text-red-500">{error}</p>}
          <p className="text-base">Spent: ${spent.toLocaleString()}</p>
          {/* progress bar */}
          <div className="bg-[#808080] h-3 w-full rounded-full relative shadow-xl mt-4 mb-1">
            <div
              className={`h-full rounded-full ${progressBarColor()}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={() => {
                setInputValue(budget);
                setIsEditing(true);
              }}
              className="text-sm cursor-pointer p-1 px-5 rounded-lg bg-opacity-80 bg-yellow-600 text-white hover:bg-opacity-100"
            >
              Edit
            </button>
          </div>

          <h1 className="number">${budget.toLocaleString()}</h1>
          <p className="text-base">Spent: ${spent.toLocaleString()}</p>

          {/* progress bar */}
          <div className="bg-[#808080] h-3 w-full rounded-full relative shadow-xl mt-4 mb-1">
            <div
              className={`h-full rounded-full ${progressBarColor()}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetEdit;
