import { Link } from 'react-router-dom'
import { useState } from 'react'
import './styles.css'
import { useLocation } from 'react-router-dom'

export const Navbar = () =>{
  const [isLogged,setIsLogged] = useState( localStorage.getItem('isLogged') )
  const location = useLocation();
  function handleLogout(e){
    e.preventDefault()
    localStorage.removeItem('isLogged')
    setIsLogged(null)
  }
    return(
<header className="topnav">
  <div className='container-header d-flex'>
  <Link to={'/'} className='logo'>
    <h1>Gutins</h1>
  </Link>
  <nav>
  <Link className={location.pathname === '/produtos'?"active":null} to={'/produtos'}>Produtos</Link>
  <Link className={location.pathname === '/sobre'?"active":null} to={'/sobre'}>Sobre</Link>
  <Link className={location.pathname === '/carrinho'?"active":null} to={'/carrinho'}>Carrinho</Link>
  {localStorage.getItem('isLogged') == null || localStorage.getItem('isLogged') == undefined || isLogged == null?
  <Link className={location.pathname === '/login'?"active":null} to={'/login'}>Login</Link>
  :
  <a onClick={(e)=>handleLogout(e)}>Logout</a>
  }
  {localStorage.getItem('isLogged') == null || localStorage.getItem('isLogged') == undefined || isLogged == null?
  <Link className={location.pathname === '/cadastro'?"active":null} to={'/cadastro'}>Cadastro</Link>:null
  }
  </nav>
  </div>
</header>
    )
}

