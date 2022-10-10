import { Contatos } from '../../components/Contatos'
import { Navbar } from '../../components/Navbar'

import './styles.css'

export const MonoProduto = () =>{
    return(
       <div>
       <Navbar/> 
       <container className="container">
        <div >
        <img  className='imgProd' src='https://avatars.githubusercontent.com/u/90064992?v=4' alt="shoe" />
        <span><br></br>
        Carne: Picanha
        </span> <br></br>
        <span>
        Descrição: Carne bovina de alto padrão
        </span><br></br>
        <span>
        Valor: R$150,00
        </span><br></br>
        <span>
        Estoque: 3 Unidades
        </span><br></br>
        <button className='btComprar'>Comprar Agora</button>
        <button className='btAdd'>Adicionar ao Carrinho</button>
        </div>
  
       
       </container>
       <Contatos/>   
       </div>

    )
}