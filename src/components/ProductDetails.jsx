import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useEffect(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const { data } = await axios.get(`http://localhost:8001/products/${id}`);
      setProduct(data);
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>Price: {product.price}</p>
          <p>Description: {product.descr}</p>
          <img src={product.image} alt={product.title} />
          <Link to="/">Back to Product List</Link>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
