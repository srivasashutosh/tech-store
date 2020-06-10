import React from 'react'
import Product from '../Products'
import {Link} from "react-router-dom"
import Title from "../Title"
import {ProductConsumer} from "../../context"
export default function Featured() {
  return (
    <section className="py-5">
     <div className="container">
        <Title title= "featured product" center="true"/>
        <div className="row">
        <ProductConsumer>
            {value=>{
                const {featuredProducts} = value
                return featuredProducts.map(item=>(
                    <Product key={item.id} product={item}>

                    </Product>
                ))
            }}
        </ProductConsumer>
        </div>
        <div className="row mt-5">
            <div className="col text-center">
              <Link to="/products" className="main-link">Our products</Link>

            </div>
        </div>
     </div>
    </section>
  )
}
