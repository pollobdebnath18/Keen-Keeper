import { useState } from "react";
import { FriendsContext } from "./FriendsContextProvider";


const FriendsProvider = ({ children }) => {
  const [timeline, setTimeLine] = useState([]);
//   console.log(timeline);

  const data = {
    timeline,
    setTimeLine,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
