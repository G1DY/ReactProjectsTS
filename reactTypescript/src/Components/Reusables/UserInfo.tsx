import { info } from "./type";

type userInfoProp = {
  user: info;
};
const UserInfo: React.FC<userInfoProp> = ({ user }) => {
  return (
    <div>
      <h1>User Information</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default UserInfo;
