import React from 'react'
import Filme from './Filme'

const ListaDeFilmes = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.filmes.map((movie, i) => {
                            return (
                                <Filme key={i} verFilmeInfo={props.verFilmeInfo} movieId={movie.id} image={movie.poster_path} name={movie.title} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ListaDeFilmes;