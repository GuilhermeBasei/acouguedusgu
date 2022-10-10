import { Link } from 'react-router-dom'
import { Produtos } from '../../pages/Produto'
import './styles.css'

export const Navbar = () =>{
    return(
<div class="topnav">

  <Link to={'/'}>Home</Link>
  <Link to={'/produtos'}>Produtos</Link>
  <a href="#news">Destaques</a>
  <a href="#contact">Contato</a>
  <a href="#about">Sobre</a>
</div>
    )
}