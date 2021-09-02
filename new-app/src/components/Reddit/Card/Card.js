import React from 'react';
import './Card.css'

function Postagem(props){
    return (
        <postagens>
            <div className="postagem">
                <div className="postagens__thumb">
                    <figure>
                        <img src={props.post.thumbnail} alt={props.post.title} />  
                    </figure>
                </div>
                <article className="postagem__conteudo">
                    <a href={ "https://reddit.com" + props.post.permalink } target="_blank" rel="noreferrer">
                        <h3>{ props.post.title }</h3>
                        <p>enviado há x horas por <span>{props.post.author}</span></p> 
                    </a> 
                </article>
            </div>
            
        </postagens>
    )
}

export default Postagem;
