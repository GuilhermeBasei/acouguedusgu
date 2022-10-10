import { Contatos } from '../../components/Contatos'
import { Itens } from '../../components/Itens'
import { Navbar } from '../../components/Navbar'
import { Titulo } from '../../components/Titulo'
import './styles.css'

export const Home = () =>{
    return(
       <div>
       <Navbar/>   
       <Titulo/>
       <Itens/>   
      <Contatos/>    
</div>
    )
}