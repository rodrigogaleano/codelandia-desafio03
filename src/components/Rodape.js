import React from "react";

function Rodape(){
    return(
        <footer className="rodape">
            <div className="formulario">
                <h2>Entre em contato</h2>
                <form>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="number" placeholder="Telefone"/>
                    <textarea placeholder="Mensagem"></textarea>
                    <button type="submit">Enviar mensagem</button>
                </form>
            </div>
        </footer>
    );
}

export default Rodape;