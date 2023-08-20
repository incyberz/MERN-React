import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setData(result.products));
  }, []);

  return <></>;
}

export default Products;
