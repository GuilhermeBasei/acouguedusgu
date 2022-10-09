import { Carrossel } from '../../components/Carrossel'
import { Navbar } from '../../components/Navbar'
import './styles.css'

export const Home = () =>{
    return(
       <div className="container">
       <Navbar/>
       <Carrossel/>
       </div>

    )
}