// import React, { useState, useEffect } from "react";
// import AvatarModal from "./Modals/AvatarModal";
// import defaultProfile from "./people (9).jpg";
// import fmAvatar1 from "./Modals/avatar-imgs/fm-avatars (1).png";
// import fmAvatar2 from "./Modals/avatar-imgs/fm-avatars (2).png";
// import fmAvatar3 from "./Modals/avatar-imgs/fm-avatars (4).png";
// import fmAvatar4 from "./Modals/avatar-imgs/fm-avatars (7).png";
// import mAvatar1 from "./Modals/avatar-imgs/m-avatars (2).png";
// import mAvatar2 from "./Modals/avatar-imgs/m-avatars (3).png";
// import mAvatar3 from "./Modals/avatar-imgs/m-avatars (4).png";
// import mAvatar4 from "./Modals/avatar-imgs/m-avatars (5).png";

// const avatars = [
//   fmAvatar1,
//   fmAvatar2,
//   fmAvatar3,
//   fmAvatar4,
//   mAvatar1,
//   mAvatar2,
//   mAvatar3,
//   mAvatar4,
// ];

// const UploadingImg = ({
//   defaultSize = "w-40 h-40", // Default image size
//   textSize = "text-base", // Default image size
//   buttonSize = "p-1 px-3", // Default button padding
//   label = "Upload Photo", // Default label for upload button
//   useAvatarButtonLabel = "Use Avatar", // Default label for use avatar button
//   onProfileImageChange, // Callback to notify parent of profile image changes
// }) => {
//   const [profileImage, setProfileImage] = useState(
//     localStorage.getItem("profileImage") || defaultProfile
//   );
//   const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

//   // 🔥 Listen for avatar updates in localStorage
//   useEffect(() => {
//     const updateProfileImage = () => {
//       setProfileImage(localStorage.getItem("profileImage") || defaultProfile);
//       if (onProfileImageChange) onProfileImageChange(profileImage); // Call the parent callback if available
//     };
//     window.addEventListener("storage", updateProfileImage);
//     return () => window.removeEventListener("storage", updateProfileImage);
//   }, [profileImage, onProfileImageChange]);

//   // ✅ Handle file uploads and update immediately
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const newImageUrl = reader.result;
//         localStorage.setItem("profileImage", newImageUrl);
//         setProfileImage(newImageUrl);
//         window.dispatchEvent(new Event("storage"));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // ✅ Check if profileImage is an avatar
//   const isAvatar = avatars.includes(profileImage);

//   return (
//     <div className="flex gap-10 items-center">
//       {/* 🖼 Profile Image updates dynamically */}
//       <img
//         src={profileImage}
//         alt="Profile"
//         className={`rounded-full object-cover object-top bg-gray-400 ${defaultSize} ${
//           isAvatar ? "pt-2" : ""
//         }`}
//       />

//       <div className="flex flex-row gap-4">
//         <label
//           className={`bg-yellow-600 hover:bg-opacity-80 p-2 text-white rounded-lg font-semibold cursor-pointer ${buttonSize} ${textSize} `}
//         >
//           {label}
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleFileChange}
//           />
//         </label>

//         <button
//           onClick={() => setIsAvatarModalOpen(true)}
//           className={`bg-yellow-600 hover:bg-opacity-80 text-white rounded-lg font-semibold ${buttonSize} ${textSize}`}
//         >
//           {useAvatarButtonLabel}
//         </button>
//       </div>

//       {/* 🎭 Avatar Selection Modal */}
//       {isAvatarModalOpen && (
//         <AvatarModal
//           isOpen={isAvatarModalOpen}
//           onClose={() => setIsAvatarModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default UploadingImg;
