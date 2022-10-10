import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Cadastro } from '../pages/Cadastro'
import { Carrinho } from '../pages/Carrinho'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Produtos } from '../pages/Produto'
import { Sobre } from '../pages/Sobre'



export const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/produtos' exact element={<Produtos/>}/>
            <Route path='/sobre' exact element={<Sobre/>}/>
            <Route path='/carrinho' exact element={<Carrinho/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/cadastro' exact element={<Cadastro/>}/>
        </Routes>
        </BrowserRouter>
    )
}