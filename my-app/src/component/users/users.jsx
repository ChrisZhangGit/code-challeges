import { useState, useEffect } from "react";
import api from "../../lib/api";
import User from "./user/user";
import "./users.css";

const Users = () => {
  const [usersData, setUsersData] = useState("");
  useEffect(() => {
    api.getDataFromUsersAPI().then((res) => setUsersData(res.data.users));
  }, []);
  console.log("usersData", usersData);
  return (
    <div className="users-container">
      {usersData.length !== 0 &&
        usersData?.map((item) => (
          <User
            key={item.id}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
          />
        ))}
    </div>
  );
};

export default Users;
