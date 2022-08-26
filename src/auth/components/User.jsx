import React from "react";
import { useSelector } from "react-redux";
import { userEmailSelector, userNameSelector } from "../store/authSelectors";

const User = () => {
  const email = useSelector(userEmailSelector);
  const name = useSelector(userNameSelector);

  return (
    <div>
      <h3>{name || "empty"}</h3>
      <h5>{email || "empty"}</h5>
    </div>
  );
};

export default User;
