import React from 'react';
import './Card.css'

function Postagem({ post }){
    return (
        <postagens>
            <div className="postagem">
                <div className="postagens__thumb">
                    <figure>
                        <img src={post.thumbnail} alt={post.title} />  
                    </figure>
                </div>
                <article className="postagem__conteudo">
                    <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noreferrer">
                        <h3>{ post.title }</h3>
                        <p>enviado há x horas por <span>{post.author}</span></p> 
                    </a> 
                </article>
            </div>
            
        </postagens>
    )
}

export default Postagem;
