import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import axios from "axios";
import { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";

function App() {
  const API = "http://localhost:8001/products";

  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  async function readProducts() {
    const { data } = await axios(API);
    setProducts(data);
  }
  async function getOneProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  }

  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
    readProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProducts();
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    readProducts();
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              readProducts={readProducts}
              products={products}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route
          path="/add"
          element={<AddProduct createProduct={createProduct} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditProduct
              getOneProduct={getOneProduct}
              oneProduct={oneProduct}
              editProduct={editProduct}
            />
          }
        />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
