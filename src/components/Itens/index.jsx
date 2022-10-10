import { useState } from 'react'
import Slider from "react-slick";
import './styles.css';
//teste
export const Itens = () => {
    const [itens, setItens] = useState([
        {
            name: "Maminhona",
            value: 150.00,
        },
        {
            name: "Maminhona",
            value: 150.00,
        },
        {
            name: "Maminhona",
            value: 150.00,
        },
        {
            name: "Maminhona",
            value: 150.00,
        },
        {
            name: "Maminhona",
            value: 150.00,
        },
        {
            name: "Maminhona",
            value: 150.00,
        },
        {
            name: "Maminhona",
            value: 150.00,
        }
    ]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
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
                                    <img src='https://png.pngtree.com/png-vector/20201129/ourlarge/pngtree-beef-png-image_2406591.jpg' alt="shoe" />
                                </div>
                                <div className='info'>
                                    <span className='name'>{item.name}</span>
                                    <span className='preco'>{`R$${item.value}KG`}</span>
                                    <button>Adicionar ao carrinho</button>
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