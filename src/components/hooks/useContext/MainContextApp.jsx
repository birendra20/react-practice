import React from "react";
import ComponentE from "./ComponentE";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function MainContextApp() {
  return (
    <div className="App">
      <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default MainContextApp;
