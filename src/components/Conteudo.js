import React from "react";

function Conteudo() {
    return (
        <div className="conteudo-container">
            {
                [1, 2, 3, 4, 5, 6].map(item => (
                    <div className="card">
                        <div className={`card-capa card-cor-${item}`}/>
                        <div className="card-conteudo">
                            <h2>Título do card</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Conteudo;