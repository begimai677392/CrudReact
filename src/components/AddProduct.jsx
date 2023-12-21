import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ createProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!title || !price || !descr || !image) {
      alert("Some areas are empty");
      return;
    }

    let newProduct = { title, price, descr, image };

    try {
      await createProduct(newProduct);
      setTitle("");
      setDescr("");
      setPrice("");
      setImage("");
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
      // Handle error as needed (e.g., show an error message to the user)
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add Product</h2>
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Description"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleAddProduct} style={styles.button}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: "10px 0",
    padding: "8px",
    fontSize: "16px",
    width: "300px",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "114B2E",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AddProduct;
