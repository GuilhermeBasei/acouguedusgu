import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./styles.css";
import { CartContext } from "../../context";
import api from "../../api/api";

export const Item = () => {
  const { addToCart, products, updateProduct, setProducts } = useContext(CartContext);
  const [isLogged,setIsLogged] = useState( localStorage.getItem('isLogged') )

  useEffect(()=>{
    const getProducts = async ()=>{
      const response = await api.get('Products')
      console.log(response.data)
      const items = response?.data.map((item)=>{
        return {
          name:item.description,
          value: item.price,
          id: item.id,
          date: '2022-12-13',
          link: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/14380/medium/maminha-bovina-leve-mais-resfriada-kg_10762.jpg",
        }
      })
      setProducts(items)
    }
    getProducts();
  },[])

  return (
    <div className="container">
      <div className="container">
        <div>
          {localStorage.getItem('isLogged') == 'true' || isLogged != null?
            <Link to={"/cadastrarProduto"}>
              <button>Adicionar Produto</button>
            </Link>
            :
            null
          }
        </div>
        <div className="row">
          {products.map((item, index) => {
            return (
              <div className="col-sm" key={index}>
                <Link to={"/monoproduto"} state={item}>
                  <img className="imgProd" src={item.link} alt="" />
                  <br></br>
                  <span>{item.name}</span>
                  <br></br>
                  <span>R${item.value}KG</span>
                  <br></br>
                </Link>
                {localStorage.getItem('isLogged') == 'true' || isLogged != null?
                  <Link to={"/cadastrarProduto"} state={item}>
                    <button>Atualizar</button>
                  </Link>
                  : null
                }
                <button onClick={() => addToCart(item.id)}>
                  Adicionar ao carrinho
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
