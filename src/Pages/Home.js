

import React from "react";
import { BarraPesquisa } from "./BarraPesquisa";
import { Fundo } from "./Style";

export const Home = () =>{

    return(
        <Fundo>
        <BarraPesquisa/>
        
        </Fundo>
    )
}

import React, { useEffect, useState } from "react";
import { BarraPesquisa } from "../Components/BarraPesquisa/BarraPesquisa";
import { buscarProdutos } from "../Service/api";
import { Cards } from "../Components/Cards/Cards";

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

  useEffect(() => {
    buscarProdutosApi();
  });
  function buscarProdutosApi() {
    buscarProdutos("produto")
      .then((res) => {
        setProdutos(res.data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <BarraPesquisa />
      <Cards lista={produtos} />
      {/* {produtos.map((produto, index) => {
        return (
          <>
            <p>{produto.nomeProduto}</p>
            <p>{produto.descricaoProduto}</p>
            <p>{produto.nomeCategoria}</p>
          </>
        );
      })} */}
    </>
  );
};

