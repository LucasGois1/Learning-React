import React, { Component } from 'react'
import './style/card.css'

class Card extends Component {

    render() {
        const { nome, sobrenome, conteudo } = this.props
        function nomeFormatado(nome, sobrenome) {
            return `${nome} ${sobrenome}`
        }
        return (
            <div className="card">
                <div className="card-header">
                    <h1>Bem vindo, {nomeFormatado(nome, sobrenome)}!</h1>
                </div>
                <div className="card-body">
                    <h3>
                        {conteudo}
                    </h3>
                </div>
                <div className="card-footer">
                    <h3>Rodapé...</h3>
                </div>
            </div>
        )
    }
}
export default Card