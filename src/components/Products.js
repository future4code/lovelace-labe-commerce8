import React from 'react'


class Products extends React.Component{
    render(){
        return (
            <div>
            <img src={this.props.products.image} alt="Imagem de Camisa" />
            <p>{this.props.products.name}</p>
            <p>R${this.props.products.price}</p>
            <button>Adicionar ao carrinho</button>
        </div>
        )
    }
}
export default Products;