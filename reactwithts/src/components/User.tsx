import { FC } from "react";

interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
}

const User: FC<UserShape> = ({ name, age, isStudent }) => {
  return (
    <div>
      {name}
      {age}
      {isStudent}
    </div>
  );
};

export default User;
