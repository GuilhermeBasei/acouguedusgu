import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastrarProduto } from "../pages/CadastrarProduto";
import { Cadastro } from "../pages/Cadastro";
import { Carrinho } from "../pages/Carrinho";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { MonoProduto } from "../pages/MonoProduto";
import { Produtos } from "../pages/Produto";
import { Sobre } from "../pages/Sobre";
import { CartProvider } from "./../context/index";

export const AppRoutes = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/produtos" exact element={<Produtos />} />
          <Route path="/sobre" exact element={<Sobre />} />
          <Route path="/carrinho" exact element={<Carrinho />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/cadastro" exact element={<Cadastro />} />
          <Route path="/monoProduto" exact element={<MonoProduto />} />
          <Route
            path="/cadastrarProduto"
            exact
            element={<CadastrarProduto />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
