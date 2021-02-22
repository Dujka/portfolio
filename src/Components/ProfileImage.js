import React from "react";

function ProfileImage() {
  return (
    <div>
      <img
        className="absolute top-0 left-0 shadow-2xl rounded-full w-1/3 sm:2/3 select-none"
        src="/Images/ProfileImage.webp"
        alt="Aleksandar Dujkić"
      />
    </div>
  );
}

export default ProfileImage;
