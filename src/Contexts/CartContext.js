import React from 'react'
import { Children, createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [precoTotal, setPrecoTotal] = useState()
  const [cart, setCart] = useState([])

  useEffect(() => {
    let soma = 0
    cart.map(item => {
      soma = soma + Number(item.valorUnitario)
    })

    console.log(cart)
    setPrecoTotal(soma)
  }, [cart])

  function addItem(item) {
    const aux = cart
    aux.push(item)
    setCart(aux)
    console.log(cart)
  }

  function removeItem(id) {
    // const filteredCart = cart.filter((item) => item.id !== id);
    // setCart(filteredCart);
    for (var i = 0; i < cart.length; i++) {
      if (cart[i] === id) {
        cart.splice(i, 1)
      }
    }
    console.log(cart)
  }

  function clearCart() {
    setCart([])
    console.log(cart)
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, precoTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}
