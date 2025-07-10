import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router";
import {
  getCartData,
  removeCartData,
  removeAllData,
} from "../utilities/localDB";
const Cart = () => {
  let cart = [];

  const products = useContext(UserContext);

  let savedCart = getCartData();
  // console.log(savedCart);

  for (let key in savedCart) {
    cart.push({
      ...products.find((pd) => pd.id === key),
      quantity: savedCart[key],
    });
  }

  return (
    <main>
      <div className="cart flex-center">
        <div className="cart__items">
          <div className="cart__items-heading card">
            <h2>Shopping Cart </h2>
            <div className="cart__items-action">
              <button
                onClick={() => removeAllData()}
                className="removebtn text-center hover:font-semibold hover:text-amber-50 rounded"
              >
                Remove all items
              </button>
              <Link to="/products" className="btn text-center">
                <button className="hover:font-semibold hover:text-amber-50 rounded">
                  Shop More
                </button>
              </Link>
            </div>
          </div>

          {/* Pruduct 01  */}

          {cart?.length > 0 ? (
            cart.map((product) => (
              <div
                key={product.id + 22}
                className="cart__item card flex-space-around"
              >
                <img
                  key={product.id + 8}
                  src={product.image}
                  alt="headphone"
                  className="cart__item-img"
                />
                <div className="cart__item-description">
                  <h3 key={product?.id} className="product__name">
                    {product.title}
                  </h3>
                  <h4 className="product__price">Price: ${product?.price}</h4>
                  <p className="cart__item-shipping">Free Shipping</p>
                </div>
                <div className="cart__item-actions">
                  <p>Quantity</p>

                  <div className="cart__item-trash">
                    <span>{product?.quantity}</span>
                  </div>
                </div>
                <div className="cart__item-actions">
                  <p>Sub Total</p>
                  <p key={product.id + 20}>
                    ${product?.price * product?.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeCartData(product.id)}
                  className="removebtn hover:font-semibold hover:text-amber-50 rounded"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="bg-gray-50 shadow text-red-600">
              Your Cart is empty{" "}
              <Link to="/products">
                <span className="text-blue-600">Go Back</span>
              </Link>{" "}
            </div>
          )}
        </div>
        <div className="cart__payment">
          <div className="cart__payment-summary card">
            <h2>Payment Summary</h2>
            <div>
              <p>Sub Total:</p>
              <p key={Math.random() * 10}>
                {cart.reduce((total, product) => total + product?.quantity, 0)}
                <span> Item(s)</span>
              </p>
            </div>
            <div>
              <p>Shipping Cost:</p>
              <p>$00.00</p>
            </div>
            <div>
              <p>Total Price:</p>
              <p key={Math.random() * 10}>
                {cart.reduce(
                  (total, product) =>
                    total + product?.price * product?.quantity,
                  0
                )}
              </p>
            </div>
            <button className="btn cart__payment-btn">Pay Now</button>
          </div>
          <div className="cart__payment-methods card">
            <h2>Payment Methods</h2>
            <div>
              <i className="fa-brands fa-cc-visa fa-3x hover:bg-green-500 hover:rounded"></i>
              <i className="fa-brands fa-cc-apple-pay fa-3x hover:bg-green-500 hover:rounded"></i>
              <i className="fa-brands fa-cc-amex fa-3x hover:bg-green-500 hover:rounded"></i>
              <i className="fa-brands fa-cc-amazon-pay fa-3x hover:bg-green-500 hover:rounded"></i>
              <i className="fa-brands fa-cc-paypal fa-3x hover:bg-green-500 hover:rounded"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
