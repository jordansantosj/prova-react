import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import AreaDePesquisa from './AreaDePesquisa';
import ListaDeFilmes from './ListaDeFilmes';
import Paginacao from './Paginacao';
import FilmeInfo from './FilmeInfo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmes: [],
      topFilme: [],
      termoPesquisa: '',
      totalResultado: 0,
      paginaAtual: 1,
      filmeAtual: null
    }
    this.apiKey = process.env.REACT_APP_API
  }

  lidarMudança = (e) => {
    this.setState({ termoPesquisa: e.target.value })
  }

  lidarSubmit = (e) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${this.state.termoPesquisa}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ filmes: [...data.results], totalResultado: data.total_results })
      })
    e.preventDefault();
  }

  proximaPagina = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${this.state.termoPesquisa}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ filmes: [...data.results], paginaAtual: pageNumber })
      })
  }

  verFilmeInfo = (id) => {
    const filteredMovie = this.state.filmes.filter(movie => movie.id == id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    this.setState({ filmeAtual: newCurrentMovie })
  }

  async componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=1`
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({ topFilme: [...data.results] })
      })
  }

  fecharFilmeInfo = () => {
    this.setState({ filmeAtual: null })
  }

  render() {

    const numeroPaginas = Math.floor(this.state.totalResultado / 20)
    const { topFilme } = this.state

    return (
      <div className="App">
        <Nav />
        {
          this.state.filmeAtual == null ?
            <div>
              <AreaDePesquisa lidarSubmit={this.lidarSubmit} lidarMudança={this.lidarMudança} />
              <ListaDeFilmes verFilmeInfo={this.verFilmeInfo} filmes={this.state.filmes} />
            </div>
            :
            <FilmeInfo fecharFilmeInfo={this.fecharFilmeInfo} filmeAtual={this.state.filmeAtual} />
        }

        {
          this.state.totalResultado > 20 && this.state.filmeAtual == null ?
            <Paginacao pages={numeroPaginas} proximaPagina={this.proximaPagina} paginaAtual={this.state.paginaAtual} />
            : ''
        }
        <div className="container">
          <h3 className="blue-text">Melhores filmes tmdb</h3>
          <ul>
            {
              topFilme.map(filme => (

                <li className="collection-item" style={{ width: 450, display: "inline-block", marginLeft: 20 }} key={filme.id}>

                  <div className="col s12 m7">
                    <div className="card horizontal ">
                      <div className="card-image">
                        <img className="" src={`http://image.tmdb.org/t/p/w185/${filme.poster_path}`} alt="Card image cap" />
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          {
                            filme.title.length > 30 ?
                              <span class="card-title">{filme.title.substring(0, 30).concat('...')}</span> :
                              <span class="card-title">{filme.title}</span>
                          }

                          {
                            filme.overview.length > 170 ?
                              <p>{filme.overview.substring(0, 170).concat('...')}</p> :
                              <p>{filme.overview}</p>
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
