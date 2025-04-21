import React, { useState, useEffect } from "react";
// import AvatarModal from "./Modals/AvatarModal";
import defaultProfile from "./../people (9).jpg";
import fmAvatar1 from "./avatar-imgs/fm-avatars (1).png";
import fmAvatar2 from "./avatar-imgs/fm-avatars (2).png";
import fmAvatar3 from "./avatar-imgs/fm-avatars (4).png";
import fmAvatar4 from "./avatar-imgs/fm-avatars (7).png";
import mAvatar1 from "./avatar-imgs/m-avatars (2).png";
import mAvatar2 from "./avatar-imgs/m-avatars (3).png";
import mAvatar3 from "./avatar-imgs/m-avatars (4).png";
import mAvatar4 from "./avatar-imgs/m-avatars (5).png";
import QuickTransferAvatarModal from "./QuickTransferAvatarModal";

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

const QuickTransferProfilePhoto = () => {
  const [personImage, setPersonImage] = useState(
    localStorage.getItem("personImage") || defaultProfile
  );
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  // 🔥 Listen for avatar updates in localStorage
  useEffect(() => {
    const updatePersonImage = () => {
      setPersonImage(localStorage.getItem("personImage") || defaultProfile);
    };
    window.addEventListener("storage", updatePersonImage);
    return () => window.removeEventListener("storage", updatePersonImage);
  }, []);

  // ✅ Handle file uploads and update immediately
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImageUrl = reader.result;
        localStorage.setItem("personImage", newImageUrl);
        setPersonImage(newImageUrl);
        window.dispatchEvent(new Event("storage"));
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Check if personImage is an avatar
  const isAvatar = avatars.includes(personImage);

  return (
    <div className="flex gap-10 items-center">
      {/* 🖼 Profile Image updates dynamically */}
      <img
        src={personImage}
        alt="Profile"
        className={`w-20 h-20 rounded-full mb-3 bg-gray-300 object-cover object-top ${
          isAvatar ? "pt-2" : ""
        }`}
      />

      <div className="flex flex-row gap-5">
        <label className="bg-yellow-600 opacity-80 hover:opacity-100 text-white px-4 py-1 rounded-lg h-fit cursor-pointer">
          Add Image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        <button
          onClick={() => setIsAvatarModalOpen(true)}
          className="bg-yellow-600 opacity-80 hover:opacity-100 text-white px-4 py-1 rounded-lg h-fit"
        >
          Use Avatar
        </button>
      </div>

      {/* 🎭 Avatar Selection Modal */}
      {isAvatarModalOpen && (
        <QuickTransferAvatarModal
          isOpen={isAvatarModalOpen}
          onClose={() => setIsAvatarModalOpen(false)}
        />
      )}
    </div>
  );
};

export default QuickTransferProfilePhoto;
