import './styles.css'
//teste
export const Itens = () =>{
    return(
        <div className='container'>
           <div className='carrossel'>
            <div class="item">
                <div className='image'>
                   <img src='https://png.pngtree.com/png-vector/20201129/ourlarge/pngtree-beef-png-image_2406591.jpg' alt="shoe"/>
                </div>
                <div className='info'>
                    <span className='name'>Maminhona</span>
                    <span className='preco'>R$150.00 KG</span>    
                    <button>Adicionar ao carrinho</button>          
                </div>
          
            </div>
          

            <div class="item">
                <div className='image'>
                   <img src='https://png.pngtree.com/png-vector/20201129/ourlarge/pngtree-beef-png-image_2406591.jpg' alt="shoe"/>
                </div>
                <div className='info'>
                    <span className='name'>Maminhona</span>
                    <span className='preco'>R$150.00 KG</span> 
                    <button>Adicionar ao carrinho</button>                
                </div>
            </div>

            <div class="item">
                <div className='image'>
                   <img src='https://png.pngtree.com/png-vector/20201129/ourlarge/pngtree-beef-png-image_2406591.jpg' alt="shoe"/>
                </div>
                <div className='info'>
                    <span className='name'>Maminhona</span>
                    <span className='preco'>R$150.00 KG</span> 
                    <button>Adicionar ao carrinho</button>                
                </div>
            </div>

            <div class="item">
                <div className='image'>
                   <img src='https://png.pngtree.com/png-vector/20201129/ourlarge/pngtree-beef-png-image_2406591.jpg' alt="shoe"/>
                </div>
                <div className='info'>
                    <span className='name'>Maminhona</span>
                    <span className='preco'>R$150.00 KG</span> 
                    <button>Adicionar ao carrinho</button>                
                </div>
            </div>
            </div>
        </div>
    )
}