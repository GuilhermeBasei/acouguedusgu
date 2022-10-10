import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import './styles.css'

export const Cadastro = () =>{
    return(
        <div>
            <Navbar />
            <div class="login-page">
                <div class="form">
                   
                    <form class="login-form">
                        <input type="text" placeholder="Nome" />                       
                        <input type="password" placeholder="Senha" />
                        <input type="password" placeholder="Repita a senha" />
                        <button>login</button>
                        <p class="message">Já tem registro? <Link to={'/login'}>Faça login clicando aqui</Link></p>                      

                    </form>
                </div>
            </div>
        </div>

    )
}