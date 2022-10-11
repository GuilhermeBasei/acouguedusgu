import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Contatos } from "../../components/Contatos";
import { Navbar } from "../../components/Navbar";
import { CartContext } from "../../context";
import './styles.css'

export const CadastrarProduto = () => {
  const { cart, totalPrice, createProduct, updateProduct } =
    useContext(CartContext);
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [date, setDate] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if (state) {
      setName(state.name);
      setDescricao(state.descricao);
      setPreco(state.value);
      setDate(state.date);
      setIsUpdating(true);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const produto = {
      name,
      descricao,
      value: preco,
      date,
      link: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/14380/medium/maminha-bovina-leve-mais-resfriada-kg_10762.jpg",
    };

    console.log(produto);

    if (isUpdating) {
      updateProduct(state.id, produto);
      alert("Produto Editado!");
    } else {
      createProduct(produto);
      alert("Produto Cadastrado!");
    }
  }

  return (
    <div>
      <Navbar />
      <div class="createProduct">
        <form class="product-form" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="sp1">
          {isUpdating ? "Editar Produto" : "Cadastrar Produto"}
          </h1><br></br>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="date"
            placeholder="Data"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          /><br></br>
          <button type="submit">
            {isUpdating ? "Editar Produto" : "Cadastrar Produto"}
          </button>
        </form>
      </div>
      <Contatos />
    </div>
  );
};
