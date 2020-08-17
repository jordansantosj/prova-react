import React from 'react'

const Paginacao = (props) => {
    const pageLinks = []
    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.paginaAtual == i ? 'active' : ''
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.proximaPagina(i)}><a href='#'>{i}</a></li>)
    }

    return (
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    {props.paginaAtual > 1 ? <li className={`waves-effect`} onClick={() => props.proximaPagina(props.paginaAtual - 1)}><a href='#'>Prev</a></li> : ''}
                    {pageLinks}
                    {props.paginaAtual < props.pages + 1 ? <li className={`waves-effect`} onClick={() => props.proximaPagina(props.paginaAtual + 1)}><a href='#'>Next</a></li> : ''}
                </ul>
            </div>
        </div>
    )
}

export default Paginacao;