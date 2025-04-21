import React from "react";
import fmAvatar1 from "./avatar-imgs/fm-avatars (1).png";
import fmAvatar2 from "./avatar-imgs/fm-avatars (2).png";
import fmAvatar3 from "./avatar-imgs/fm-avatars (4).png";
import fmAvatar4 from "./avatar-imgs/fm-avatars (7).png";
import mAvatar1 from "./avatar-imgs/m-avatars (2).png";
import mAvatar2 from "./avatar-imgs/m-avatars (3).png";
import mAvatar3 from "./avatar-imgs/m-avatars (4).png";
import mAvatar4 from "./avatar-imgs/m-avatars (5).png";

const avatars = [
  fmAvatar1,
  fmAvatar2,
  fmAvatar3,
  fmAvatar4,
  mAvatar1,
  mAvatar2,
  mAvatar3,
  mAvatar4,
];

const QuickTransferAvatarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleAvatarSelect = (avatar) => {
    localStorage.removeItem("personImage"); // Force state update
    setTimeout(() => {
      localStorage.setItem("personImage", avatar);
      window.dispatchEvent(new Event("storage"));
    }, 50);
    onClose();
  };

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 pt-5 rounded-lg shadow-lg w-fit">
        <h2 className="text-xl font-bold mb-5">Choose an Avatar</h2>

        <div className="grid grid-cols-4 justify-between gap-7">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className="w-20 bg-gray-300 pt-2 rounded-full cursor-pointer hover:border-2 hover:border-yellow-700"
              onClick={() => handleAvatarSelect(avatar)}
            />
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-10 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuickTransferAvatarModal;
