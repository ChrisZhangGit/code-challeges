import Header from "./component/header/header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./component/homepage/homepage";
import Users from "./component/users/users";
import Products from "./component/products/products";
import UserInfo from "./component/users/user-information/userInformation";
import ProductInfo from "./component/products/product-information/productInformation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/users/:userId" element={<UserInfo />}></Route>
          <Route path="/products/:productId" element={<ProductInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
