import React from 'react';
import './App.css';
//import "boostrap/dist/css/boostrap.min.css";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import Default from "./pages/Default";
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import SingleProduct from "./pages/SingleProductPage"
import {Route, Switch} from "react-router-dom"
import NavBar from "./components/Navbar"
import SideCart from "./components/SideCart"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
function App() {
  return (
    <>
    <NavBar/>
    <SideCart/>
    <Sidebar/>
    <Footer/>
    <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/about" exact component={AboutPage}/>
    <Route path="/contact" exact component={ContactPage}/>
    <Route path="/products" exact component={ProductsPage}/>
    <Route path="product/:id" exact component={SingleProduct}/>
    <Route path="/cart" exact component={CartPage}/>
    <Route component={Default}/>
    </Switch>
    </>
  );
}

export default App;
