// import Button from "./components/Button";
// import User from "./components/User";

import ReactHookForm from "./components/ReactHookForm";

// import AdminInfo from "./components/AdminInfo";
// import EventHandling from "./components/EventHandling";
// import UserList from "./components/UserList";
// import Form from "./components/Form";
// import UserInfo from "./components/UserInfo";
// import { AdminInfoList, Info } from "./types";
// import Daisyui from "./components/daisyui";
// import { Theme, ThemePanel } from "@radix-ui/themes";
// import Radixui from "./components/Radixui";
// import Shadcnui from "./components/Shadcnui";

const App = () => {
  // const handleClick = () => {
  //   alert("Button clicked");
  // }

  // const user: Info = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "john@gmail.com",
  // };

  // const admin: AdminInfoList = {
  //   id: 2,
  //   name: "Jane Smith",
  //   email: "jane@gmail.com",
  //   role: "admin",
  //   lastLogin: new Date(),
  // };

  return (
    <div>
      {/* <User name="arpit" age={20} isStudent={true} /> */}
      {/* <Button label="click me" onclick={handleClick} disabled={false}/> */}
      {/* <UserInfo user={user} /> */}
      {/* <AdminInfo admin={admin} /> */}
      {/* <Form/> */}
      {/* <EventHandling/> */}
      {/* <UserList/> */}
      {/* <Daisyui/> */}
      {/* <Theme accentColor="yellow" grayColor="sand" radius="small" scaling="110%" appearance="dark">
        <Radixui/>
        <ThemePanel />
      </Theme> */}
      {/* <Shadcnui/> */}
      <ReactHookForm/>

    </div>
  );
};

export default App;
