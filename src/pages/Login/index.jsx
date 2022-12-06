import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contatos } from "../../components/Contatos";
import { Navbar } from "../../components/Navbar";
import "./styles.css";
import api from "../../api/api";

export const Login = () => {
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();

  async function login(e){
    e.preventDefault();
    const response = await api.get("Users")
    const data = response.data
    var user = data.find((item)=>(item.password === password && item.name===name))
    if(user){
      localStorage.setItem('isLogged', true)
      alert("Logado com sucesso");
      navigate('/')
    }else{
      alert("Tente novamente")
    }
  }
  return (
    <div>
      <Navbar />
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Nome" />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Senha" />
            <button onClick={(e)=>login(e)}>login</button>
            <p class="message">
              Sem registro?{" "}
              <Link to={"/cadastro"}>Crie uma conta clicando aqui</Link>
            </p>
          </form>
        </div>
      </div>
      <Contatos />
    </div>
  );
};
