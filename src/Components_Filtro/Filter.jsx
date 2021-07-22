import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
    font-size: 25px;
    margin-top: 20px;
    font-family: 'Indie Flower', cursive;
    margin-bottom: 30px;
`

const Funcoes = styled.div`
    margin-left: 10px;
`

const Text = styled.p`
    margin-bottom: 0;
    font-family: 'Shadows Into Light', cursive;
`

const Img = styled.img`
    width: 35px;
    margin: 10px;
    cursor: pointer;
`

const Menu = styled.input`
    display: none;
`

const Pai = styled.div`
`


class Filter extends React.Component{
    state = {
        nome: ""
    }


    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    render(){
        return <Pai>
            
             <Menu
            type="checkbox"
            id="chec"
            />
            <label for="chec">
            <Img src='https://sbseg2019.ime.usp.br/SBSeg2019_files/menu.png'/>
            </label>
            
        
            <Funcoes>
            <Titulo>Filtros</Titulo>
            <Text>Valor Mínimo: </Text>
            <input
            type="number"
            />
            <Text>Valor Máximo:</Text>
            <input
            type="number"
            />
            <Text>Busca por nome:</Text>
            <input
            value={this.state.nome}
            type="text"
            onChange={this.onChangeNome}
            />
            </Funcoes>
        </Pai>
    }
}

export default Filter