import React from "react";

const ProfileIcon = () => {
  const userString = localStorage.getItem("User");
  const user = JSON.parse(userString);

  return (
    <div>
      <img
        src={user.profileImageUrl}
        alt="Profile"
        style={{
          width: "50px",
          height: "50px",
          padding: "5px",
          borderRadius: "50%",
          objectFit: "cover",
          backgroundColor: "yellow",
          border: "3px solid #555",
        }}
      />
    </div>
  );
};

export default ProfileIcon;
