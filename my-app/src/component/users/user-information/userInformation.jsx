import { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../../lib/api";
import { Card, Avatar, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./userInformation.css";

const { Meta } = Card;

const UserInfo = () => {
  const params = useParams();
  console.log("params", params);
  const { userId } = params;
  const [usersData, setUsersData] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  useEffect(() => {
    api.getDataFromUsersAPI().then((res) => setUsersData(res.data.users));
  }, []);

  useEffect(() => {
    if (userId && usersData) {
      setSelectedUser(usersData.filter((item) => +item.id === +userId));
    }
  }, [userId, usersData]);

  console.log("selectedUser", selectedUser[0]);
  return (
    selectedUser[0]?.id && (
      <Card
        // cover={<img alt="User Avatar" src={selectedUser[0].image} />}
        actions={[
          <div key="email">
            <UserOutlined />
            <a href={`mailto:${selectedUser[0].email}`}>
              {selectedUser[0].email}
            </a>
          </div>,
          <div key="phone">
            <UserOutlined />
            <a href={`tel:${selectedUser[0].phone}`}>{selectedUser[0].phone}</a>
          </div>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src={selectedUser[0].image} className="user-avatar" />
          }
          title={`${selectedUser[0].firstName} ${selectedUser[0].lastName}`}
          description={
            <>
              <p>Gender: {selectedUser[0].gender}</p>
              <p>Age: {selectedUser[0].age}</p>
              <p>Blood Group: {selectedUser[0].bloodGroup}</p>
              <Divider />
              <p>Height: {selectedUser[0].height} cm</p>
              <p>Weight: {selectedUser[0].weight} kg</p>
              <p>Eye Color: {selectedUser[0].eyeColor}</p>
              <p>Hair Color: {selectedUser[0].hair?.color}</p>
              <p>Hair Type: {selectedUser[0].hair?.type}</p>
              <Divider />
              <p>
                Address: {selectedUser[0].address?.address},{" "}
                {selectedUser[0].address?.city},{" "}
                {selectedUser[0].address?.state}{" "}
                {selectedUser[0].address?.postalCode}
              </p>
              <p>
                Coordinates: {selectedUser[0].address?.coordinates.lat},{" "}
                {selectedUser[0].address?.coordinates.lng}
              </p>
              <p>IP: {selectedUser[0].ip}</p>
              <Divider />
              <p>University: {selectedUser[0].university}</p>
              <p>Department: {selectedUser[0].company?.department}</p>
              <p>Company: {selectedUser[0].company?.name}</p>
              <p>Job Title: {selectedUser[0].company?.title}</p>
            </>
          }
        />
      </Card>
    )
  );
};

export default UserInfo;
