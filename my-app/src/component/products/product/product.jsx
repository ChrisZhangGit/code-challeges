import "./product.css";

const Product = (props) => {
  const redirectProductInfo = () => {
    if (props.id) {
      window.location = `/products/${props.id}`;
    }
  };

  return (
    <div className="product-container" onClick={redirectProductInfo}>
      <span className="product-tag">{props.id}</span>
      <span className="product-tag">{props.title}</span>
      <span className="product-tag">{"(" + props.brand + ")"}</span>
    </div>
  );
};

export default Product;
