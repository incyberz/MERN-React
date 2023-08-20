import React, { useEffect, useState } from "react";
import CartDetails from "./CartDetails";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/ProductSlice";

function Products() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setData(result.products));
  }, []);

  return (
    <>
      <div className="container">
        <CartDetails />
        <div className="row">
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <div key={index} className="col-lg-3 mb-4">
                    <div className="card">
                      <img src={item.thumbnail} className="card-img-top" />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <code>$ {item.price}</code>
                        <p className="card-text">{item.description}</p>
                        <a
                          href="#"
                          className="btn btn-primary"
                          onClick={() =>
                            dispatch(
                              addProduct({
                                id: item.id,
                                title: item.title,
                                description: item.description,
                                price: item.price,
                              })
                            )
                          }
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            : "Loading products ..."}
        </div>
      </div>
    </>
  );
}

export default Products;
