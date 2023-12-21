import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = ({ getOneProduct, oneProduct, editProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setDescr(oneProduct.descr);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);
  //   console.log(oneProduct, "oneProduct");
  function handleSaveChanges() {
    let editedProduct = {
      title,
      price,
      descr,
      image,
    };
    editProduct(id, editedProduct);
    navigate("/");
  }
  return (
    <div>
      <h2>Edit product</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default EditProduct;
