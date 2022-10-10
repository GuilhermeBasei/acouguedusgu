import { Contatos } from '../../components/Contatos'
import { Navbar } from '../../components/Navbar'
import './styles.css'

export const Carrinho = () =>{
    return(
       <div>
       <Navbar/> 
       <div class="container-carrinho">

<div class="cart-container">

    <header>

        <h2>Carrinho</h2>

    </header>

    <div class="cart-body">

        <div class="cart-item">

            <div class="cart-row">
            <img  className='imgProd' src='https://avatars.githubusercontent.com/u/90064992?v=4' alt="shoe" />
               
                    
                <div class="cart-row-cell pic">
              
                    <span></span>
                
                </div>

                <div class="cart-row-cell desc">
                    
                    <h5>Maminhona</h5>


                </div>

                <div class="cart-row-cell quant">

                    <ul>
                        <li><a href="#">-</a></li>

                        <li>1</li>
                        
                        <li><a href="#">+</a></li>
                    </ul>

                </div>

                <div class="cart-row-cell amount">

                    <p>R$130,87</p>

                </div>	
            
            </div>

            <div class="cart-row">
            <img  className='imgProd' src='https://avatars.githubusercontent.com/u/90064992?v=4' alt="shoe" />
               
                    
                <div class="cart-row-cell pic">
              
                    <span></span>
                
                </div>

                <div class="cart-row-cell desc">
                    
                    <h5>Maminhona</h5>


                </div>

                <div class="cart-row-cell quant">

                    <ul>
                        <li><a href="#">-</a></li>

                        <li>1</li>
                        
                        <li><a href="#">+</a></li>
                    </ul>

                </div>

                <div class="cart-row-cell amount">

                    <p>R$130,87</p>

                </div>	
            
            </div>
       
       

           
          



        </div>
    
    </div>

    <footer>


  
       
        <div class="totals">
            
            <p class="total-label">Total</p>

            <p class="total-amount">R$600,00</p>

        </div>

        <button>Finalizar Compra</button>

    </footer>

</div>

</div>
<Contatos/> 
       </div>

    )
}