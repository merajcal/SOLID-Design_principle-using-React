import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const saveProfile = () => {
    console.log("Saving profile...");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
}

export default UserProfile;
