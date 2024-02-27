import React, { useEffect, useState } from 'react';
import SliderA from './SliderA';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function Home() {
    const [products,setproducts]=useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setproducts(data.products);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const addtoCart = (clickedId) => {

        fetch(`https://dummyjson.com/products/${clickedId}`)
          .then((res) => res.json())
          .then((data) => {
            // Retrieve the existing cart items from localStorage or initialize an empty array
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      
            // Check if the clicked item already exists in the cart
            const isItemInCart = existingCartItems.some(item => item.id === data.id);
           
      
            if (isItemInCart) {
              alert("Item is already in the cart!");
            } else {
              // Push the newly fetched data into the cart items array
              existingCartItems.push(data);
            
      
              // Save the updated cart items array back to localStorage
              localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
              NotificationManager.success('Added to Cart successfully', 'Success');
              alert("Added to cart",window.location.reload());
              // Perform any additional actions or updates here
            }
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            // Handle any errors that occur during the fetch operation
          });
        
      };

      const addtoWishlist = (clickedId) => {

        fetch(`https://dummyjson.com/products/${clickedId}`)
          .then((res) => res.json())
          .then((data) => {
            // Retrieve the existing cart items from localStorage or initialize an empty array
            const existingWishlistItems = JSON.parse(localStorage.getItem('WishlistItems')) || [];
      
            // Check if the clicked item already exists in the cart
            const isItemInWishlist = existingWishlistItems.some(item => item.id === data.id);
           
      
            if (isItemInWishlist) {
              alert("Item is already in the wishlist!");
            } else {
              // Push the newly fetched data into the cart items array
              existingWishlistItems.push(data);
            
      
              // Save the updated cart items array back to localStorage
              localStorage.setItem('WishlistItems', JSON.stringify(existingWishlistItems));
      
              alert("Added to wishlist",window.location.reload());
              // Perform any additional actions or updates here
            }
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            // Handle any errors that occur during the fetch operation
          });
        
      };
      
      
      
    
    
  return (
    <div>
        {/* <!-- Carousel Start --> */}
        <div className="container-fluid mb-3">
        <div className="row px-xl-5">
        <div className="col-lg-8">
        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
        <li data-target="#header-carousel" data-slide-to="1"></li>
        <li data-target="#header-carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item position-relative active" style={{ height: '430px' }}>
        <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }} />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: '700px' }}>
            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
            </div>
        </div>
        </div>
        {/* Add similar carousel-items for Women Fashion and Kids Fashion */}
        </div>
        </div>
        </div>
        <div className="col-lg-4">
        <div className="product-offer mb-30" style={{ height: '200px' }}>
        <img className="img-fluid" src="img/offer-1.jpg" alt="" />
        <div className="offer-text">
        <h6 className="text-white text-uppercase">Save 20%</h6>
        <h3 className="text-white mb-3">Special Offer</h3>
        <a href="" className="btn btn-primary">Shop Now</a>
        </div>
        </div>
        <div className="product-offer mb-30" style={{ height: '200px' }}>
        <img className="img-fluid" src="img/offer-2.jpg" alt="" />
        <div className="offer-text">
        <h6 className="text-white text-uppercase">Save 20%</h6>
        <h3 className="text-white mb-3">Special Offer</h3>
        <a href="" className="btn btn-primary">Shop Now</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        {/* <!-- Carousel End --> */}
        {/* <!-- Featured Start --> */}
        <div className="container-fluid pt-5">
     <div className="row px-xl-5">
     {products &&
  products.map((el, index) => (
    <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-3" style={{ height: "350px" }}>
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden" style={{ height: "200px" }}>
          <img className="img-fluid w-100" src={el.images[0]} alt="" style={{ height: "100%", objectFit: "cover" }} />
          <div className="product-action">
            <a className="btn btn-outline-dark btn-square" onClick={()=>addtoCart(el.id)}><i className="fa fa-shopping-cart"></i></a>
            <a className="btn btn-outline-dark btn-square" onClick={()=>addtoWishlist(el.id)}><i className="far fa-heart"></i></a>
            <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-sync-alt"></i></a>
            <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-search"></i></a>
          </div>
        </div>
        <div className="text-center py-3">
          <a className="h6 text-decoration-none text-truncate" href="">{el.title}</a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>${el.price}</h5>
            <h6 className="text-muted ml-2"><del>${el.price}</del></h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star-half-alt text-primary mr-1"></small>
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
  ))
}

</div>

        </div>
        {/* <!-- Featured End --> */}
        {/* <!-- Categories Start --> */}
        <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-1.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-2.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-3.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-4.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-4.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-3.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-2.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-1.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-2.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-1.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-4.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
        <div className="cat-item img-zoom d-flex align-items-center mb-4">
        <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
        <img className="img-fluid" src="img/cat-3.jpg" alt="" />
        </div>
        <div className="flex-fill pl-3">
        <h6>Category Name</h6>
        <small className="text-body">100 Products</small>
        </div>
        </div>
        </a>
        </div>
        </div>
        </div>
        {/* <!-- Categories End --> */}
        {/* <!-- Products Start --> */}
        <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
        <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
        <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star-half-alt text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
        <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star-half-alt text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
        <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
        <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
        <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star-half-alt text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
        <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star-half-alt text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
        <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
        <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        {/* <!-- Products End --> */}
        {/* <!-- Offer Start --> */}
        <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
        <div className="col-md-6">
        <div className="product-offer mb-30" style={{ height: 300 }}>
        <img className="img-fluid" src="img/offer-1.jpg" alt="" />
        <div className="offer-text">
        <h6 className="text-white text-uppercase">Save 20%</h6>
        <h3 className="text-white mb-3">Special Offer</h3>
        <a href="" className="btn btn-primary">
        Shop Now
        </a>
        </div>
        </div>
        </div>
        <div className="col-md-6">
        <div className="product-offer mb-30" style={{ height: 300 }}>
        <img className="img-fluid" src="img/offer-2.jpg" alt="" />
        <div className="offer-text">
        <h6 className="text-white text-uppercase">Save 20%</h6>
        <h3 className="text-white mb-3">Special Offer</h3>
        <a href="" className="btn btn-primary">
        Shop Now
        </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        {/* <!-- Offer End --> */}
        {/* <!-- Products Start --> */}
        <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Recent Products</span>
        </h2>
        <div className="row px-xl-5">
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
            <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
            <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star-half-alt text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
            <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star-half-alt text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
            <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
            <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
            <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star-half-alt text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
            <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star-half-alt text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
        <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
        </a>
        </div>
        </div>
        <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
        Product Name Goes Here
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>$123.00</h5>
        <h6 className="text-muted ml-2">
            <del>$123.00</del>
        </h6>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small className="far fa-star text-primary mr-1" />
        <small>(99)</small>
        </div>
        </div>
        </div>
        </div>
        </div>
       
        </div>
        {/* <!-- Products End --> */}
        {/* <!-- Vendor Start --> */}
        <div className="col mt-4">
        <SliderA/>
        </div>
        {/* <!-- Vendor End --> */}
    </div>
  )
}

export default Home
