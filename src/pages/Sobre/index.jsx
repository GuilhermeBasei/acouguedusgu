import { Contatos } from '../../components/Contatos'
import { Navbar } from '../../components/Navbar'
import { Titulo } from '../../components/Titulo'
import './styles.css'

export const Sobre = () =>{
    return(
       <div>
       <Navbar/> 
         <Titulo/>
         <div className='descricao'>
            Alunos: Augusto Garcia, Fernando Gamba, Gabriel Medeiros, Guilherme Basei.
            <br></br>
            Disciplina: Desenvolvimento Web
         </div>
         <Contatos/>
       </div>

    )
}