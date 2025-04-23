import { FC } from "react";
import { AdminInfoList } from "../types";

type AdminInfo = {
  admin: AdminInfoList;
};

const AdminInfo: FC<AdminInfo> = ({ admin }) => {
  return (
    <div>
      id: {admin.id} {admin.name} {admin.email} {admin.role} {admin.lastLogin.toLocaleString()}
    </div>
  );
};

export default AdminInfo;
