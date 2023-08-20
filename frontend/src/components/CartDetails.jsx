import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function CartDetails() {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <>
      <div className="alert alert-success text-center">
        Total Products : {products.Products.length} - Total Proce : $
        {products.Products.length > 0
          ? products.Products.reduce((a, b) => a + b.price, 0)
          : 0}
      </div>
    </>
  );
}

export default CartDetails;
