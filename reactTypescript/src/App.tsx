import AdminInfo from "./AdminInfo";
import UserInfo from "./UserInfo";
import { info, AdminInfoList } from "./type";

const App = () => {
  const user: info = {
    id: 1,
    name: "john Doe",
    email: "john@gmail.com",
  };
  const admin: AdminInfoList = {
    id: 1,
    name: "joe smith",
    email: "joe@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };
  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};
export default App;
