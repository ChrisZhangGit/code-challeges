import { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../../lib/api";
import {
  Card,
  Divider,
  Row,
  Col,
  Typography,
  Image,
  Rate,
  Button,
  Tooltip,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./productInformation.css";

const { Text, Title, Paragraph } = Typography;

const ProductInfo = () => {
  const params = useParams();
  console.log("params", params);
  const { productId } = params;
  const [productData, setProductData] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  useEffect(() => {
    api
      .getDataFromProductsAPI()
      .then((res) => setProductData(res.data.products));
  }, []);

  useEffect(() => {
    if (productId && productData) {
      setSelectedProduct(productData.filter((item) => +item.id === +productId));
    }
  }, [productId, productData]);

  // console.log("selectedProduct", selectedProduct[0]);
  return (
    selectedProduct[0]?.id && (
      <div>
        <Card>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Image
                src={selectedProduct[0].thumbnail}
                alt={selectedProduct[0].title}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={16}>
              <Title level={2}>{selectedProduct[0].title}</Title>
              <Text type="secondary">{selectedProduct[0].brand}</Text>
              <Divider />
              <Rate allowHalf defaultValue={selectedProduct[0].rating} />
              <Text strong> {selectedProduct[0].rating?.toFixed(1)} </Text>
              <Tooltip title={`${selectedProduct[0].stock} in stock`}>
                <Text type="warning"> ({selectedProduct[0].stock} left) </Text>
              </Tooltip>
              <Divider />
              <Title level={4}>
                {" "}
                $
                {selectedProduct[0].price -
                  (selectedProduct[0].price *
                    selectedProduct[0].discountPercentage) /
                    100}{" "}
              </Title>
              <Paragraph delete> ${selectedProduct[0].price} </Paragraph>
              <Button type="primary" icon={<ShoppingCartOutlined />}>
                {" "}
                Add to Cart{" "}
              </Button>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <Title level={3}>Description</Title>
              <Paragraph>{selectedProduct[0].description}</Paragraph>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <Title level={3}>Product Images</Title>
              {selectedProduct[0].images.map((img, index) => (
                <Image
                  src={img}
                  alt={`${selectedProduct[0].title} - Image ${index + 1}`}
                  key={index}
                />
              ))}
            </Col>
          </Row>
        </Card>
      </div>
    )
  );
};

export default ProductInfo;
