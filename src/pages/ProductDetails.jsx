import { Link, useParams } from "react-router";
import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { addToDb } from "../utilities/localDB";

const ProductDetails = () => {
  const products = useContext(UserContext);
  // console.log(products);

  // const urlParams = new URLSearchParams(window.location.search);
  // const paramId = urlParams.get("paramName");
  const paramId = useParams().id;
  // console.log(paramId);
   const [cart, setCart] = useState([]);
  const addToHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <>
      {products.map((product) => {
        if (product.id === paramId) {
          return (
            <main key={paramId + 12} className="flex-center">
              <div className="main-content">
                <section className="product-details flex-center">
                  <div className="product__details-left flex-center">
                    <img key={product.id + 10} src={product.image} alt="Headphone" />
                  </div>
                  <div className="product__details-right">
                    <h3 key={product.id + 6} className="product__name">
                      <strong>{product.title}</strong>
                    </h3>
                    <p>
                      <span className="dot green"></span>
                      <span className="dot black"></span>
                      <span className="dot red"></span>
                    </p>
                    <p className="product__description">
                      <strong>Description: </strong>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatem nostrum in quis ab quaerat asperiores. Est
                      dolores laboriosam laudantium, neque minus temporibus
                      exercitationem maiores harum!
                    </p>
                    <p key={product.id + 7} className="product__description">
                      {product.description}
                    </p>
                    <h4 key={paramId} className="product__category">
                      <strong>Category:</strong> {product.category}
                    </h4>
                    <h4 className="product__price">
                      <strong>Price:</strong> ${product.price}
                    </h4>
                    <p className="product__rating">Rating: 4.5/5</p>
                    <div
                    onClick={() => addToHandler(product)}
                      to={"/cart?paramName=" + product.id}
                      className="btn text-center"
                    >
                      <button  className="hover:font-semibold">
                        ADD TO CART
                      </button>
                    </div>
                    <Link to="/products" className="btn text-center">
                      <button className="hover:font-semibold">
                        Back To Shopping
                      </button>
                    </Link>
                  </div>
                </section>
              </div>
            </main>
          );
        }
      })}
    </>
  );
};

export default ProductDetails;
