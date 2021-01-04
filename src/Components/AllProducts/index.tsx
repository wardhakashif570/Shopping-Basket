import React, { useState } from "react";
import "./Product.css";
import Card from "../Card/index";
import productsList from "../../Utils/products.json";

const Products = () => {
 
  return (
    <div className="mt-3">
      <div className="container">
        <div className="row">
          {productsList.map((item, index) => {
            let obj = {
              name: item.name,
              id: item.id,
              image: item.image,
              price: item.price,
              Quantity: 1,
              subTotal: item.price,
            };
            return (
              <div className="col-md-4" key={index}>
                <Card obj={obj} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;