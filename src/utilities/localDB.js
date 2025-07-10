import Swal from "sweetalert2";

const addToDb = (id) => {
  let cart = {};
  // data get from Local Storage
  const storedData = localStorage.getItem("cart");
  const productData = localStorage.getItem("products");

  const products = JSON.parse(productData);

  //  console.log(storedData)
  if (storedData) {
    cart = JSON.parse(storedData);
  }

  // add quantity
    const quantity = cart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }

    else{
        cart[id] = 1;
    }
    // console.log(quantity)
    localStorage.setItem('cart', JSON.stringify(cart));

 
}
// GET data from Local Storage
const getCartData = () => {
  let shoppingCart = {};
  // data get from Local Storage
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeCartData = (id) => {
  console.log(id)
  const storedData = localStorage.getItem("cart");
  if (storedData) {
    const shoppingCart = JSON.parse(storedData);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("cart", JSON.stringify(shoppingCart));
    }
  }
  Swal.fire(
            'Product Removed!',
            'You have removed a Product!',
            'info'
          )
  setTimeout(() => window.location.reload(), 1000);
};

// Remove All data to Cart
const removeAllData = () => {
  localStorage.removeItem("cart");
  Swal.fire(
            'Product Removed All!',
            'You have removed a Product!',
            'info'
          )

  window.location.reload();
};

export { addToDb, getCartData, removeCartData, removeAllData };
