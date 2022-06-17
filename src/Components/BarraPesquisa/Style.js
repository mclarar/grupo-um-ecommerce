import styled from "styled-components";
import {  Link } from "react-router-dom";
export const Barra = styled.nav`
margin: 0;
border: 0;
`;

export const BotaoBarra = styled.ul`
list-style-type: none;
text-decoration: none;
background-color: blueviolet;
overflow: hidden;
margin: 0;
padding: 0;
  
`;
export const Botao = styled(Link)`
text-overflow: ellipsis;
text-decoration: none;
display: block;
color: black;
padding: 1.7rem;
font-size: 20px;
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
:hover{
    background-color: #9b9cdf;
    color: #5b5986;
}
`;

export const Lista = styled.li`
float: left;
padding-left: 5px;
`;
export const Carrinho = styled.div`
float: right;
padding-right: 5px;
margin-right: 8px;
`;
export const Icons = styled.img`
width: 43px;
height: 43px;
padding: 5px;
padding-top: 15px;

`;
export const BarraConsoles = styled.div`
background-color: gray;

`;
export const Consoles = styled.ul`
background-color: gray;
list-style-type: none;
display: flex;
flex-direction: row;
margin: 0;


`;
export const ImgConsoles = styled.img`
padding-right: 80px;
float: left;

`;