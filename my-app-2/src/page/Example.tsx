import React from "react";

export interface userProps {
  name: string;
  memberSince: number;
}

const Example = (userData: userProps) => {
  //const name = "cia";
  return (
    <div className="example">
      Hello, {userData.name}! <br />
      Member Since : {userData.memberSince}
    </div>
  );
};

export default Example;
