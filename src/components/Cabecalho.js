import React from "react";
import Imagem from "../assets/images/image.svg"

function Cabecalho() {
    return (
        <header>
            <div className="cabecalho">
                <div className="cabecalho-conteudo">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                    <button>Botão</button>
                </div>
                <div className="cabecalho-imagem">
                    <img src={Imagem} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Cabecalho