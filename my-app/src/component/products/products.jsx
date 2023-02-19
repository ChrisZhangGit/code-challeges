import { useState, useEffect } from "react";
import Product from "./product/product";
import api from "../../lib/api";

const Products = () => {
  const [productsData, setProductsData] = useState("");
  useEffect(() => {
    api
      .getDataFromProductsAPI()
      .then((res) => setProductsData(res.data.products));
  }, []);
  return (
    <div className="users-container">
      {productsData.length !== 0 &&
        productsData?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            brand={item.brand}
          />
        ))}
    </div>
  );
};

export default Products;
