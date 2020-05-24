import React, { Component } from 'react'
import {linkData} from "./linkData"
const ProductContext = React.createContext();
class ProductProvider extends Component {

    state = {
        sideBarOpen : false,
        cartOpen : false,
        cartItem : 0,
        links : linkData,
        cart : []
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
          openCart : this.openCart

      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer,ProductContext,ProductProvider}