import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cont, setCont] = useState(0);

  function addToCart(id) {
    const currentProducts = [...products];
    const product = currentProducts.find((product) => product.id == id);

    const cartProduct = {
      id,
      quantity: 1,
    };

    const newCart = [...cart, cartProduct];

    setTotalPrice((prev) => prev + Number(product.value));
    setCart(newCart);
  }

  function getProduto(cartProduct) {
    console.log(cartProduct);
    console.log(products);
    const currentProducts = [...products];
    const product = currentProducts.find(
      (product) => product.id == cartProduct.id
    );

    console.log(product);

    return {
      ...product,
      ...cartProduct,
      total: product.value * cartProduct.quantity,
    };
  }

  function getTotalPrice() {
    const currentProducts = [...products];
    const currentCart = [...cart];
    let totalPrice = 0;

    currentCart.forEach((cart) => {
      let product = currentProducts.find((product) => product.id == cart.id);

      totalPrice += product.value * cart.quantity;
    });

    setTotalPrice(totalPrice);
    return totalPrice;
  }

  function addOneQuantity(id) {
    const currentProducts = [...products];
    const product = currentProducts.find((product) => product.id == id);

    const currentCart = [...cart];
    const prod = currentCart.find((cartProduct) => cartProduct.id == id);
    const index = currentCart.indexOf(prod);

    currentCart[index].quantity += 1;

    setCart(currentCart);
    const total = totalPrice + Number(product.value);
    setTotalPrice(total);
  }

  function removeOneQuantity(id) {
    const currentProducts = [...products];
    const product = currentProducts.find((product) => product.id == id);

    const currentCart = [...cart];
    const prod = currentCart.find((cartProduct) => cartProduct.id == id);
    const index = currentCart.indexOf(prod);

    if (currentCart[index].quantity > 1) {
      currentCart[index].quantity -= 1;
      const total = totalPrice - Number(product.value);
      setTotalPrice(total);
      setCart(currentCart);
    }
  }

  function removeFromCart(position, valor) {
    let price = totalPrice;
    price -= valor;

    let newArray = cart;
    newArray.splice(position, 1);

    setCart(newArray);
    setTotalPrice(price);
  }

  function createProduct(product) {
    product.id = cont;
    setCont((prev) => prev + 1);

    setProducts([...products, product]);
  }

  function updateProduct(id, updatedProduct) {
    const currentProducts = [...products];
    const prod = currentProducts.find((product) => product.id == id);
    const index = currentProducts.indexOf(prod);

    updatedProduct.id = id;

    currentProducts[index] = updatedProduct;

    setProducts(currentProducts);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
        removeFromCart,
        createProduct,
        updateProduct,
        products,
        addOneQuantity,
        removeOneQuantity,
        getProduto,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
