import { Link } from 'react-router-dom'
import './styles.css'

export const Navbar = () =>{
    return(
<div class="topnav">

  <Link to={'/'}>Home</Link>
  <Link to={'/produtos'}>Produtos</Link>
  <Link to={'/sobre'}>Sobre</Link>
  <Link to={'/carrinho'}>Carrinho</Link>
  <Link to={'/login'}>Login</Link>
  <Link to={'/cadastro'}>Cadastro</Link>
  
</div>
    )
}

