import React, { useState, useEffect} from "react";

export const BotaoAdicionarCarrinho = (props) =>{

    // postProdutos(produto)  =()=>{
    //     const url = '/pedido'
    //     return api.post(url, produto).then(res => res.data);
    //   }
    return(
        <button>{props.id}</button>
    )
}