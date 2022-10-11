import { useContext } from "react";
import { Contatos } from "../../components/Contatos";
import { Navbar } from "../../components/Navbar";
import { CartContext } from "../../context";
import "./styles.css";

export const Carrinho = () => {
  const {
    cart,
    totalPrice,
    addOneQuantity,
    removeOneQuantity,
    getProduto,
    getTotalPrice,
    endBuy,
  } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <div class="container-carrinho">
        <div class="cart-container">
          <header>
            <h2>Carrinho</h2>
          </header>

          <div class="cart-body">
            <div class="cart-item">
              {cart.map((cartItem, index) => {
                const product = getProduto(cartItem);

                return (
                  <div class="cart-row" key={index}>
                    <img className="imgProd" src={product.link} alt="shoe" />

                    <div class="cart-row-cell pic">
                      <span></span>
                    </div>

                    <div class="cart-row-cell desc">
                      <h5>{product.name}</h5>
                    </div>

                    <div class="cart-row-cell quant">
                      <ul>
                        <li onClick={() => removeOneQuantity(product.id)}>
                          <a href="#">-</a>
                        </li>

                        <li>{product.quantity}</li>

                        <li onClick={() => addOneQuantity(product.id)}>
                          <a href="#">+</a>
                        </li>
                      </ul>
                    </div>

                    <div class="cart-row-cell amount">
                      <p>{product.total}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <footer>
            <div class="totals">
              <p class="total-label">Total</p>

              <p class="total-amount">{`R$ ${getTotalPrice()}`}</p>
            </div>

            <button onClick={() => endBuy()}>Finalizar Compra</button>
          </footer>
        </div>
      </div>
      <Contatos />
    </div>
  );
};
