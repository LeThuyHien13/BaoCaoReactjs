import React, { Component } from 'react';
// import Header from './components/header/Header';
class Header extends Component {
  render() {
    return (
      <>
        <header className="header-section">
          <div className="header-top">
            <div className="container">
              <div className="ht-left">
                <div className="mail-service">
                  <i className=" fa fa-envelope"></i> hello.colorlib@gmail.com
                </div>
                <div className="phone-service">
                  <i className=" fa fa-phone"></i> +65 11.188.888
                </div>
              </div>
              <div className="ht-right">

              </div>
            </div>
          </div>
          {/* <div className="container">
            <div className="inner-header">
              <div className="row">
                <div className="col-lg-2 col-md-2">
                  <div className="logo">
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="advanced-search">
                    <button type="button" className="category-btn">All Categories</button>
                    <div className="input-group">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <div className="container">
              <div className="nav-depart">
                <div className="depart-btn">
                  <i className="ti-menu"></i>
                  <span>All departments</span>
                  <ul className="depart-hover">
                    <li class="active"><a href="#">Women’s Clothing</a></li>
                    <li><a href="#">Men’s Clothing</a></li>
                    <li><a href="#">Underwear</a></li>
                    <li><a href="#">Kid's Clothing</a></li>
                    <li><a href="#">Brand Fashion</a></li>
                    <li><a href="#">Accessories/Shoes</a></li>
                    <li><a href="#">Luxury Brands</a></li>
                    <li><a href="#">Brand Outdoor Apparel</a></li>
                  </ul>
                </div>
              </div>
              <nav className="nav-menu mobile-menu">
                <ul>
                  <li className="active"><a href="./index.html">Home</a></li>
                  <li><a href="./shop.html">Shop</a></li>
                  <li><a href="#">Collection</a>
                    <ul class="dropdown">
                      <li><a href="#">Men's</a></li>
                      <li><a href="#">Women's</a></li>
                      <li><a href="#">Kid's</a></li>
                    </ul>
                  </li>
                  <li><a href="./blog.html">Blog</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                  <li><a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><a href="./blog-details.html">Blog Details</a></li>
                      <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                      <li><a href="./check-out.html">Checkout</a></li>
                      <li><a href="./faq.html">Faq</a></li>
                      <li><a href="./register.html">Register</a></li>
                      <li><a href="./login.html">Login</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="mobile-menu-wrap"></div>
            </div>
          </div> */}
        </header>
      </>
    )
  }
}
export default Header;