import { useEffect, useState } from "react";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./components/UserContext";

function App() {
  
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  //     const res = await response.json();
  //     if(res){
  //       setData(res);
  //     }
  //   }

  //   getData();
  // }, []);

  return (
    <UserProvider>
      <UserProfile/>
    </UserProvider>
    
  );
}

export default App;
