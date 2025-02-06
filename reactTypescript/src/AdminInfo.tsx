import { AdminInfoList } from "./type";

type AdminInfoProp = {
  admin: AdminInfoList;
};
const AdminInfo: React.FC<AdminInfoProp> = ({ admin }) => {
  return (
    <div>
      <h1>Admin Information</h1>
      <p>ID: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Date: </p>
    </div>
  );
};
export default AdminInfo;
