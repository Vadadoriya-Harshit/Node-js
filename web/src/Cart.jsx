import React, { useState, useEffect } from 'react';

function Cart() {
  const storedData = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(storedData);
  const [quantities, setQuantities] = useState(
    cartItems.map(() => 1)
  );
  const [total, setTotal] = useState(0);

  const handleRemove = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const addQuantity = (index, price) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const removeQuantity = (index, price) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
    else{
      handleRemove();
    }
  };

  useEffect(() => {
    let newTotal = 0;
    cartItems.forEach((item, index) => {
      newTotal += item.price * quantities[index];
    });
    setTotal(newTotal);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems, quantities]);

  return (
    <div>
      <div className="container-fluid">
        <nav className="breadcrumb bg-light mb-30">
          <a className="breadcrumb-item text-dark" href="/">Home</a>
          <a className="breadcrumb-item text-dark" href="/wishlist">Wishlist</a>
        </nav>
      </div>

      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cartItems.map((el, i) => (
                  <tr key={i}>
                    <td className="align-middle">
                      <img src={el.images[0]} alt="" style={{ width: 50 }} /> {el.title}
                    </td>
                    <td className="align-middle">${el.price}</td>
                    <td className="align-middle">
                      <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-primary btn-minus" onClick={() => removeQuantity(i, el.price)}>
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={quantities[i]}
                          className="form-control form-control-sm bg-secondary border-0 text-center"
                          readOnly
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-primary btn-plus" onClick={() => addQuantity(i, el.price)}>
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">${el.price * quantities[i]}</td>
                    <td className="align-middle">
                      <button className="btn btn-sm btn-danger" onClick={() => handleRemove(i)}>
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>$150</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>${total}</h5>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
