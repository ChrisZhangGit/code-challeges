import { Button } from "antd";
import "./header.css";

const Header = () => {
  return (
    <div className="header-buttons-container">
      <Button
        onClick={() => {
          window.location.pathname = "/";
        }}
      >
        Home
      </Button>
      <Button
        onClick={() => {
          window.location.pathname = "/users";
        }}
      >
        Users
      </Button>
      <Button
        onClick={() => {
          window.location.pathname = "/products";
        }}
      >
        Products
      </Button>
    </div>
  );
};

export default Header;
