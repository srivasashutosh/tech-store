import React, { Component } from 'react'
import {linkData} from "./linkData"
import {socialData} from "./socialData";
import {items} from './productData'
const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sideBarOpen : false,
        cartOpen : false,
        links : linkData,
        socialLinks : socialData,
        cart : [],
        cartItems : 0,
        cartSubTotal : 0,
        cartTax : 0,
        cartTotal: 0,
        storeProducts : [],
        filteredProducts : [],
        featuredProducts : [],
        singleProducts : {},
        loading :  false

    }

    componentDidMount(){
        this.setProducts(items);
    }

    setProducts = products=>{
        let storeProducts = products.map(item=>{
            const {id} = item.sys;
            const image  = item.fields.image.fields.file.url
            const product = {id,...item.fields,image}
            return product
        })
        console.log(storeProducts)

        let featuredProducts = storeProducts.filter(item=> item.featured===true);
        this.setState({
            storeProducts:storeProducts,
            filteredProducts : storeProducts,
            featuredProducts:featuredProducts,
            cart:this.getStorageCart(),
            singleProducts: this.getStorageProduct(),
            loading:false
        })
    }

    getTotals = ()=>{

    }


    addTotals = ()=>{

    }

    syncStorage = () =>{

    }

    addToCart = id =>{

    }


    setSingleProduct = (id) =>{

    }

    getStorageProduct = ()=>{
        return []
    }


    getStorageCart = ()=>{
        return [];
    }

    handleSideBar = () =>{
        this.setState({
            sideBarOpen : !this.state.sideBarOpen
        })
    }

    handleCart = () =>{
        this.setState({
            cartOpen : !this.state.cartOpen
        })
    }

    closeCart = () => {
        this.setState({
            cartOpen : false
        })
    }

    openCart = () =>{
        this.setState({
            cartOpen : true
        })
    }
  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleCart : this.handleCart,
          handleSideBar : this.handleSideBar,
          closeCart : this.closeCart,
          openCart : this.openCart,
          addToCart : this.addToCart,
          setSingleProduct : this.setSingleProduct

      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer,ProductContext,ProductProvider}