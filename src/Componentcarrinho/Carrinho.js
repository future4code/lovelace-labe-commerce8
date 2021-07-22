import React from 'react';
import Styled from 'styled-components';

const ShoppingKart = Styled.div`
border:solid black 1px;
height:99vh;
width:17vw;
padding: 10px;


`
const EstilizacaoDoKart = Styled.div`
display:grid;
justify-content:end;


`


class Carrinho extends React.Component{
   
    
    render(){

        
    return(
        <EstilizacaoDoKart>
        <ShoppingKart>

        <h4>Carrinho:</h4>
        <div>
            <div>
            <p>1 x </p>
            <p>prduto</p>
            <button>Remover</button>
        
            </div>
            <div><p>Preço total:</p> </div>
        </div>
        </ShoppingKart>
    </EstilizacaoDoKart>
     )
  
  
    };
};
export default Carrinho 