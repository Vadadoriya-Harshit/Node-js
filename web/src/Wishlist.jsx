import React, { useState, useEffect } from 'react';

function Wishlist() {
  const storedItems = JSON.parse(localStorage.getItem('WishlistItems')) || [];
  const [wishlistItems, setWishlistItems] = useState(storedItems);

  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem('WishlistItems', JSON.stringify(updatedItems));
  };

  const handleDecrement = (index) => {
    const updatedItems = [...wishlistItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setWishlistItems(updatedItems);
      updateLocalStorage(updatedItems);
    }
  };

  const handleIncrement = (index) => {
    const updatedItems = [...wishlistItems];
    updatedItems[index].quantity += 1;
    setWishlistItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const handleRemove = (index) => {
    const updatedItems = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  useEffect(() => {
    let total = 0;
    wishlistItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    console.log('Total:', total);
  }, [wishlistItems]);

  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="shopping-cart">
              <div className="cart-header d-none d-sm-none d-mb-block d-lg-block">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Products</h4>
                  </div>
                  <div className="col-md-2">
                    <h4>Price</h4>
                  </div>
                  <div className="col-md-2">
                    <h4>Quantity</h4>
                  </div>
                  <div className="col-md-2">
                    <h4>Remove</h4>
                  </div>
                </div>
              </div>
              {wishlistItems.map((el, i) => (
                <div className="cart-item" key={i}>
                  <div className="row">
                    <div className="col-md-6 my-auto">
                      <a href="#">
                        <label className="product-name">
                          <img
                            src={el.images[0]}
                            style={{ width: 50, height: 50 }}
                            alt=""
                          />
                          <span className="text-info">
                            &emsp;&emsp;&emsp;{el.title}
                          </span>
                        </label>
                      </a>
                    </div>
                    <div className="col-md-2 my-auto">
                      <label className="price">${el.price}</label>
                    </div>
                    <div className="col-md-2 col-7 my-auto">
                      <div className="quantity">
                        <div className="input-group">
                          <span
                            className="btn btn1"
                            onClick={() => handleDecrement(i)}
                          >
                            <i className="fa fa-minus" />
                          </span>
                          <input
                            type="text"
                            value={el.quantity}
                            className="input-quantity"
                            readOnly
                          />
                          <span
                            className="btn btn1"
                            onClick={() => handleIncrement(i)}
                          >
                            <i className="fa fa-plus" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-5 my-auto">
                      <div className="remove" onClick={() => handleRemove(i)}>
                        <a href="#" className="btn btn-danger btn-sm">
                          <i className="fa fa-trash" /> Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
