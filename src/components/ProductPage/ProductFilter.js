import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
export default function ProductFilter() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          minPrice,
          maxPrice,
          price,
          shipping,
          handleChange,
          company,
          storeProducts,
        } = value;

        let companies = new Set()
        companies.add("all");
        for(let product in storeProducts){
          companies.add(storeProducts[product]["company"])
        }
        companies=[...companies];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
            <div>
                <label htmlFor="search">search products</label>
                <input type="text" name="search" id="search" onChange={handleChange} value={search} className="filter-item"></input>

                </div>


                <div>
                <label htmlFor="company">company</label>
                <select type="text" name="company" id="company" onChange={handleChange} value={company} className="filter-item">
                  {companies.map((item,index)=>{
                     return <option key={index} value={item}>{item}</option>                 })}
                </select>

                </div>

                <div>
                <label htmlFor="price">
        <p className="mb-2">product price : <span>${price}</span></p>
                </label>
                <input type="range" name="price" id="price" min={minPrice} max={maxPrice} onChange={handleChange} value={price} className="filter-item"></input>

                </div>


                <div>
                <label htmlFor="shipping" className="mx-2">free shipping</label>
                <input type="checkbox" name="shipping" id="shipping" onChange={handleChange} checked={shipping && true} className="filter-item"></input>

                </div>



              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}


const FilterWrapper = styled.div`
display : grid;
grid-template-columns : repeat(auto-fit,minmax(200px,1fr));
grid-column-gap : 2rem;
grid-row-gap: 1rem;

label{
  font-weight : bold;
  text-transform: capitalize;

}

.filter-item, .filter-price{
  display : block;
  width: 100%;
  background : transparent;
  border-radius : 0.5rem;
  border:  2px solid var(--darkGrey);
}
`