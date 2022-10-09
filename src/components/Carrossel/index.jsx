import './styles.css'

export const Carrossel = () =>{
    return(
        <div className='container'>
           <div className='carrossel'>
            <div class="item">
                <div className='image'>
                   <img src='https://png.pngtree.com/png-vector/20201129/ourlarge/pngtree-beef-png-image_2406591.jpg' alt="shoe"/>
                </div>
                <div className='info'>
                    <span className='name'>Maminhona</span>
                    <span className='oldPreco'>200</span>
                    <span className='preco'>150</span>              
                </div>
            </div>
            </div>
        </div>
    )
}