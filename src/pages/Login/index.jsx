import { Link } from 'react-router-dom'
import { Contatos } from '../../components/Contatos'
import { Navbar } from '../../components/Navbar'
import './styles.css'

export const Login = () => {
    return (
        <div>
            <Navbar />
            <div class="login-page">
                <div class="form">               
                    <form class="login-form">
                        <input type="text" placeholder="Nome" />
                        <input type="password" placeholder="Senha" />
                        <button>login</button>
                        <p class="message">Sem registro? <Link to={'/cadastro'}>Crie uma conta clicando aqui</Link></p>                     
                    </form>
                </div>
            </div>
            <Contatos/>  
        </div>
    )
}