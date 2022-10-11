import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Contatos } from '../../components/Contatos'
import { Navbar } from '../../components/Navbar'
import './styles.css'

export const Cadastro = () =>{
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [name, setName] = useState();
    const navigate = useNavigate();

    function handleRegister(e){
        e.preventDefault();
        if(password === confPassword){
            localStorage.setItem("password", password);
            localStorage.setItem("name", name);
            alert("Cadastro feito com sucesso");
            navigate('/login');
        }
        else{
            alert("A senha confirmada não está correta")
        }
    }
    return(
        <div>
            <Navbar />
            <div class="login-page">
                <div className="form">
                   
                    <form className="login-form">
                        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Nome" />                       
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Senha" />
                        <input onChange={(e)=>setConfPassword(e.target.value)} type="password" placeholder="Repita a senha" />
                        <button onClick={(e)=>handleRegister(e)}>Cadrastre-se</button>
                        <p className="message">Já tem registro? <Link to={'/login'}>Faça login clicando aqui</Link></p>                      

                    </form>
                </div>
            </div>
            <Contatos/>
        </div>

    )
}