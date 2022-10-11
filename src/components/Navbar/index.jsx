import { Link } from 'react-router-dom'
import './styles.css'
import { useLocation } from 'react-router-dom'

export const Navbar = () =>{
  const location = useLocation();
    return(
<header class="topnav">
  <div className='container-header d-flex'>
  <Link to={'/'} className='logo'>
    <h1>Gutins</h1>
  </Link>
  <nav>
  <Link className={location.pathname === '/produtos'?"active":null} to={'/produtos'}>Produtos</Link>
  <Link className={location.pathname === '/sobre'?"active":null} to={'/sobre'}>Sobre</Link>
  <Link className={location.pathname === '/carrinho'?"active":null} to={'/carrinho'}>Carrinho</Link>
  <Link className={location.pathname === '/login'?"active":null} to={'/login'}>Login</Link>
  <Link className={location.pathname === '/cadastro'?"active":null} to={'/cadastro'}>Cadastro</Link>
  </nav>
  </div>
</header>
    )
}

