import { Link } from 'react-router-dom'
import './styles.css'

export const Item = () => {
  return (
    <div class="container">
      <div class="row">
   
        <div class="col-sm">
        <Link to={"/monoproduto"}>
          <img className='imgProd' src='https://avatars.githubusercontent.com/u/90064992?v=4' alt="shoe" />
          <br></br>
          <span>
           Carne: Picanha
          </span><br></br>                  
          <span>
            Valor: R$150,00
          </span><br></br>     
     
          </Link>
          <button>Adicionar ao carrinho</button>
        </div>

        <div class="col-sm">
        <Link to={"/monoproduto"}>
          <img className='imgProd' src='https://avatars.githubusercontent.com/u/90064992?v=4' alt="shoe" />
          <br></br>
          <span>
           Carne: Picanha
          </span><br></br>                  
          <span>
            Valor: R$150,00
          </span><br></br>     
     
          </Link>
          <button>Adicionar ao carrinho</button>
        </div>

        <div class="col-sm">
        <Link to={"/monoproduto"}>
          <img className='imgProd' src='https://avatars.githubusercontent.com/u/90064992?v=4' alt="shoe" />
          <br></br>
          <span>
           Carne: Picanha
          </span><br></br>                  
          <span>
            Valor: R$150,00
          </span><br></br>     
     
          </Link>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>


    </div>
  )
}

