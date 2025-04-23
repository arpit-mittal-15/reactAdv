import { FC } from "react";
import { Info } from "../types";

type UserInfoList = {
  user: Info;
};

const UserInfo: FC<UserInfoList> = ({ user }) => {
  return (
    <div>
      id: {user.id} {user.name} {user.email}
    </div>
  );
};

export default UserInfo;
