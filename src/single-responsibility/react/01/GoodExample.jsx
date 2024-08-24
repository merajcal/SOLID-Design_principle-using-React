import React, { useState } from "react";

function NameInput({ name, onNameChange }) {
  return (
    <input
      type="text"
      value={name}
      onChange={onNameChange}
      placeholder="Name"
    />
  );
}

function EmailInput({ email, onEmailChange }) {
  return (
    <input
      type="email"
      value={email}
      onChange={onEmailChange}
      placeholder="Email"
    />
  );
}

function SaveButton({ onSave }) {
  return <button onClick={onSave}>Save Profile</button>;
}

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <NameInput name={name} onNameChange={(e) => setName(e.target.value)} />
      <EmailInput
        email={email}
        onEmailChange={(e) => setEmail(e.target.value)}
      />
      <SaveButton onSave={() => console.log("Saving profile...")} />
    </div>
  );
}

export default UserProfile;
