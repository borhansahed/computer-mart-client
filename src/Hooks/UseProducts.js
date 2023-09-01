import { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://computer-mart2.onrender.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default UseProducts;
