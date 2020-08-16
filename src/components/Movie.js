import React from 'react';

const Movie = (props) => {
    let stringLetters = props.name
    if(stringLetters.length > 18){
        stringLetters = stringLetters.substring(0, 18).concat('...')
    }
    return(
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    { 
                    props.image == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{ width: "100%", height: 360}}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap" style={{ width: "100%", height: 360}} />
                    }
                </div>
                <div className="card-content" style={{}}>
                    <p style={{ height: 10}}><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}> {stringLetters} </a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;