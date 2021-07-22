import React from 'react';
import Styled from 'styled-components';

const ShoppingCart = Styled.div`
border:solid black 1px;
height:99vh;
width:17vw;
padding: 10px;


`
const CartStyling = Styled.div`
display:flex;
justify-content: space-between;
`


class Cart extends React.Component{
   
    
    render(){

        
    return(
        <CartStyling>
        <ShoppingCart>

        <h4>Carrinho:</h4>
        <div>
            <div>
            <p>1 x </p>
            <p>prduto</p>
            <button>Remover</button>
        
            </div>
            <div><p>Preço total:</p> </div>
        </div>
        </ShoppingCart>
    </CartStyling>
     )
  
  
    };
};
export default Cart;