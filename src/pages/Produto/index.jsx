import { Contatos } from '../../components/Contatos'
import { Item } from '../../components/Item'
import { Navbar } from '../../components/Navbar'
import { Titulo } from '../../components/Titulo'
import './styles.css'

export const Produtos = () => {
    return (
        <div>
            <Navbar /> 
            <Item />
            <Contatos />
        </div>

    )
}