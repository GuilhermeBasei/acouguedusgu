import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./styles.css";
import { CartContext } from "../../context";

export const Item = () => {
  const { addToCart, products, updateProduct } = useContext(CartContext);

  return (
    <div className="container">
      <div class="container">
        <div>
          <Link to={"/cadastrarProduto"}>
            <button>Adicionar Produto</button>
          </Link>
        </div>
        <div class="row">
          {products.map((item, index) => {
            return (
              <div className="col-sm" key={index}>
                <Link to={"/monoproduto"} state={item}>
                  <img className="imgProd" src={item.link} alt="" />
                  <br></br>
                  <span>{item.name}</span>
                  <br></br>
                  <span>R${item.value}KG</span>
                  <br></br>
                </Link>
                <Link to={"/cadastrarProduto"} state={item}>
                  <button>Atualizar</button>
                </Link>
                <button onClick={() => addToCart(item.id)}>
                  Adicionar ao carrinho
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
