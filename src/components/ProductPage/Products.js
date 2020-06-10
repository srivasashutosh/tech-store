import React from 'react'
import {ProductConsumer} from "../../context"
import Title from "../Title"
import Product from "../Products"
export default function Products() {
  return (
    <ProductConsumer>
        {value=>{
            const {filteredProducts} = value;
            return(<section className="py-5">
                <div className="container">
                  <Title center title="our products"></Title>
        <div className="row py-5">{
            filteredProducts.map(item=><Product key={item.id} product={item}></Product>)
        }</div>
                </div>
            </section>)
        }}
    </ProductConsumer>
  )
}
