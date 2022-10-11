import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Contatos } from "../../components/Contatos";
import { Navbar } from "../../components/Navbar";
import { CartContext } from "../../context";

import "./styles.css";

export const MonoProduto = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const item = location.state;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div>
          <img className="imgProd" src={item.link} alt="shoe" />
          <span>
            <br></br>
            Carne: {item.name}
          </span>{" "}
          <br></br>
          <span>{item.descricao}</span>
          <br></br>
          <span>{`Valor: R$ ${item.value}`}</span>
          <br></br>
          <br></br>          
          <button className="btAdd" onClick={() => addToCart(item.id)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <Contatos />
    </div>
  );
};
