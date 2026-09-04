import React, { useState } from "react";
import { PRODUCTS } from "../../data/PRODUCTS";
import { Product } from "./product";

export const Shop = () => {

  const [search, setSearch] = useState("");

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>

      <h1>Shop</h1>

      <div className="container mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="row">

        {filteredProducts.map((productsData) => {

          return (
            <Product
              data={productsData}
              key={productsData.id}
            />
          );

        })}

      </div>

    </React.Fragment>
  );
};