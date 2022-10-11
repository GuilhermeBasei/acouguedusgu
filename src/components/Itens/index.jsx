import { useState } from 'react'
import Slider from "react-slick";
import './styles.css';
//teste
export const Itens = () => {
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
    ]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className='container'>
            <Slider {...settings} className='carrossel'>
                {itens.map(item => {
                    return (
                        <div className="container-item">
                            <div class="item">
                                <div className='image'>
                                    <img src={item.link} alt="shoe" />
                                </div>
                                <div className='info'>
                                    <span className='name'>{item.name}</span>
                                    <span className='preco'>{`R$${item.value}KG`}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </Slider>
        </div>
    )
}