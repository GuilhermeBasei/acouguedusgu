import { Link } from 'react-router-dom'
import { useState } from 'react'
import './styles.css'

export const Item = () => {
  const [itens, setItens] = useState([
    {
      name: "Maminha",
      value: 45.90,
      link: 'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/14380/medium/maminha-bovina-leve-mais-resfriada-kg_10762.jpg',
    },
    {
      name: "Picanha",
      value: 99.90,
      link: 'https://branguscarnes.com.br/wp-content/uploads/2021/05/picanha-brangus.png',
    },
    {
      name: "Patinho",
      value: 33.90,
      link: 'https://www.madrid.com.br/imagens/produtos/big/30062.jpg',
    },
    {
      name: "Cupim",
      value: 48.90,
      link: 'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/14368/medium/cupim-bovino-resfriado-kg_10757.jpg',
    },
    {
      name: "Costela",
      value: 25.90,
      link: 'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/14343/medium/costela-bovina-especial-resfriada-kg_92881.png',
    },
    {
      name: "Carvão",
      value: 5.00,
      link: 'https://atacadaotopburguer.com.br/wp-content/uploads/2020/08/carvao25kg.png',
    },
    {
      name: "Espetos",
      value: 27.90,
      link: 'https://png.pngtree.com/png-vector/20210205/ourlarge/pngtree-bbq-lamb-skewers-png-image_2873841.jpg',
    }
  ]);




  return (
    <div className='container'>
      {itens.map(item => {
        return (

          <div class="container">
            <div class="row">

              <div class="col-sm">
                <Link to={"/monoproduto"}>
                  <img className='imgProd' src={item.link} alt="" />
                  <br></br>
                  <span>
                    {item.name}
                  </span><br></br>
                  <span>
                    R${item.value}KG
                  </span><br></br>

                </Link>
                <button>Adicionar ao carrinho</button>
              </div>

              <div class="col-sm">
                <Link to={"/monoproduto"}>
                  <img className='imgProd' src={item.link} alt="" />
                  <br></br>
                  <span>
                    {item.name}
                  </span><br></br>
                  <span>
                    R${item.value}KG
                  </span><br></br>

                </Link>
                <button>Adicionar ao carrinho</button>
              </div>

              <div class="col-sm">
                <Link to={"/monoproduto"}>
                  <img className='imgProd' src={item.link} alt="" />
                  <br></br>
                  <span>
                    {item.name}
                  </span><br></br>
                  <span>
                    R${item.value}KG
                  </span><br></br>

                </Link>
                <button>Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        )
      })
      }

    </div>
  )
}