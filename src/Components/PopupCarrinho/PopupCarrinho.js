import React from 'react'
import './style.css'

export const PopupCarrinho = () => {
  return (
    <div>
      <output className="snackbar">
        <span className="content">Adicionado ao carrinho!</span>
        <button className="action">Desfazer</button>
      </output>
    </div>
  )
}
