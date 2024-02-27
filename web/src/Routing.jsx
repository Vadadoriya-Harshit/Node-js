import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import About from './About';

const Home = React.lazy(() => import('./Home'));
const Contact = React.lazy(() => import('./Contact'));
const Shopdetails = React.lazy(() => import('./Shopdetails'));
const Shop = React.lazy(() => import('./Shop'));
const Wishlist = React.lazy(() => import('./Wishlist'));
const Cart = React.lazy(() => import('./Cart'));
const Checkout = React.lazy(() => import('./Checkout'));
const Signup = React.lazy(() => import('./Signup'));
const Login = React.lazy(() => import('./Login'));
const Profile = React.lazy(() => import('./Profile'));

function Routing() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shopdetails" element={<Shopdetails />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Suspense>  
  );
}

export default Routing;
