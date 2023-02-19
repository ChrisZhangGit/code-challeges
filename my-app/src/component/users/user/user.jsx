// import { useParams } from "react-router";
import "./user.css";

const User = (props) => {
  const redirectUserInfo = () => {
    if (props.id) {
      window.location = `/users/${props.id}`;
    }
  };

  return (
    <div className="user-container" onClick={redirectUserInfo}>
      <span className="user-tag">{props.id}</span>
      <span className="user-tag">{props.firstName}</span>
      <span className="user-tag">{props.lastName}</span>
    </div>
  );
};

export default User;
