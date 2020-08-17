import React from 'react'

const FilmeInfo = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.fecharFilmeInfo} style={{ cursor: "pointer", paddingTop: 50 }}>
                <i className="fas fa-arrow-left"></i>
                <span style={{ marginLeft: 10 }}>Voltar</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    {
                        props.filmeAtual.poster_path == null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="Card image" style={{ width: '100%', height: 360 }}></img> :
                            <img src={`http://image.tmdb.org/t/p/w185${props.filmeAtual.poster_path}`} alt="Card image" style={{ width: '100%', height: 360 }}></img>
                    }
                </div>

                <div className="col s12 m8">
                    <div className="info-container">
                        <h3>{props.filmeAtual.title}</h3>
                        <p>{props.filmeAtual.release_date.substring(5).split("-").concat(props.filmeAtual.release_date.substring(0, 4)).join("/")}</p>
                        <p>{props.filmeAtual.overview}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FilmeInfo;