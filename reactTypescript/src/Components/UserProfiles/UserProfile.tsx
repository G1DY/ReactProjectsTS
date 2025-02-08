import { useState } from "react";

interface UserProfile {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };

  const updateAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: Number(age) }));
  };

  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };
  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="Add Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="Add Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="Add Email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
    </div>
  );
};
export default UserProfile;
