import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import Product from "../Products";
import FilterProducts from "./FilterProducts";
export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our products"></Title>
              <FilterProducts />

              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry no item matched your search
                  </div>
                ) : (
                  filteredProducts.map((item) => {
                    return <Product key={item.id} product={item}></Product>;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
