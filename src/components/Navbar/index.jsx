import { Link } from 'react-router-dom'
import { Produtos } from '../../pages/Produto'
import './styles.css'

export const Navbar = () =>{
    return(
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <Link to={'/produtos'}></Link>
  <a href="#news">Destaques</a>
  <a href="#contact">Contato</a>
  <a href="#about">Sobre</a>
</div>
    )
}