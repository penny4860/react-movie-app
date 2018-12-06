import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  // Component lifecycle
  //  1. Render: componentWillMount() -> render() -> componentDidMount()
  //    * Component instance 생성할 때, 위 순서대로 함수가 실행
  //  2. Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  //    * Application 의 상태(props/stats)가 변경될 때

  state = {
  }

  // render() 실행 이후 5초후에 state 를 update
  // state가 update 되었으므로 다시 render() 가 실행된다.
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
          },
          { 
            title: "Full Metal Jacket",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
          },
          {
            title: "Trainspotting",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Trainspotting_ver2.jpg/250px-Trainspotting_ver2.jpg"
          },
          //...this.state.movies, //이전에 정의한 array
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    // array.map()
    //  array의 각 element에 어떤 연산을 수행해서 새로운 array 를 리턴
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  
  render() {
    // state가 비었으면 "Loading"
    // state가 있으면 함수를 실행
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
