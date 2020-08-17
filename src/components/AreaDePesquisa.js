import React from 'react';

const AreaDePesquisa = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.lidarSubmit}>
                        <div className="input-field">
                            <input placeholder="Procurar Filme" type="text" onChange={props.lidarMudança}></input>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default AreaDePesquisa;