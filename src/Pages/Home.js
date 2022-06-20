import React, { useEffect, useState, useContext } from "react";
import { BarraPesquisa } from "../Components/BarraPesquisa/BarraPesquisa";
import { buscarProdutos } from "../Service/api";
import { Cards } from "../Components/Cards/Cards";
import { Fundo } from "../Components/BarraPesquisa/Style";
import { CartContext } from "../Contexts/CartContext";
import axios from "axios";

export const Home = () => {
  const [produtos, setProdutos] = useState([
    // {
    //   idProduto: 1,
    //   nomeProduto: "Playstation 5",
    //   descricaoProduto: "console de videogame",
    //   qtdEstoque: 50,
    //   valorUnitario: 5000.0,
    //   dataCadastro: "19/11/2021",
    //   nomeCategoria: "Eletronicos",
    // },
    // {
    //   idProduto: 2,
    //   nomeProduto: "Playstation 5",
    //   descricaoProduto: "console de videogame",
    //   qtdEstoque: 50,
    //   valorUnitario: 5000.0,
    //   dataCadastro: "19/11/2021",
    //   nomeCategoria: "Eletronicos",
    // },
    // {
    //   idProduto: 3,
    //   nomeProduto: "macbook",
    //   descricaoProduto: "Samsung Smart TV 50",
    //   qtdEstoque: 1,
    //   valorUnitario: 3000.0,
    //   dataCadastro: "05/06/2022",
    //   nomeCategoria: "Eletronicos",
    // },
  ]);

  //teste
  // const { cart, addItem, removeItem, clearCart } = useContext(CartContext);

  useEffect(() => {
    buscarProdutosApi();
  }, []);

  function buscarProdutosApi() {
    buscarProdutos("produto")
      .then((res) => {
        setProdutos(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
//teste
  // function jsonProduto() {
    
  //   let daa = {
  //     produto: {
  //       idProduto: cart[0].idProduto,
  //     },
  //     quantidade: 1,
  //     precoVenda: cart[0].valorUnitario,
  //     percentualDesconto: 0.1,
  //   };
  //   cart.forEach(element => {
  //     daa={
  //     produto: {
  //       idProduto: cart[0].idProduto,
  //     },
  //     quantidade: 1,
  //     precoVenda: cart[0].valorUnitario,
  //     percentualDesconto: 0.1,
  //   };
  //   });
  //   teste(daa)
  // }

  // function teste(daa) {
  //   let haha = {
  //     idCliente: 1,
  //     itemPedidoList: [daa],
  //   };
  //   console.log(haha);
  //   axios.post("http://localhost:8080/ecommerce/pedido", haha);
  // }

  return (
    <>
      <Fundo>
        <BarraPesquisa />

        <Cards lista={produtos} />
        {/* teste */}
        {/* <button onClick={() => jsonProduto()}>dasda</button> */}
        {/* {produtos.map((produto, index) => {
        return (
          <>
            <p>{produto.nomeProduto}</p>
            <p>{produto.descricaoProduto}</p>
            <p>{produto.nomeCategoria}</p>
          </>
        );
      })} */}

        {/* <h1 onClick={()=>(item)}>{carrinho.nome}</h1> */}
      </Fundo>
    </>
  );
};
