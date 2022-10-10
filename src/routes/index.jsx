import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Produtos } from '../pages/Produto'



export const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/produtos' exact element={<Produtos/>}/>
        </Routes>
        </BrowserRouter>
    )
}