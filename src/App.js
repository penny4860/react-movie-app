import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
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
  }
]

class App extends Component {

  // Component lifecycle
  //  1. Render: componentWillMount() -> render() -> componentDidMount()
  //    * Component instance 생성할 때, 위 순서대로 함수가 실행
  //  2. Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  //    * Application 의 상태(props/stats)가 변경될 때


  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          // array.map()
          //  array의 각 element에 어떤 연산을 수행해서 새로운 array 를 리턴

          // props 방식
          //  1. Movie component 에 title/poster 정보를 전달한다.
          //  2. Movie component class 에서는 {this.props.title}/{this.props.poster} 로 해당 정보를 사용한다. 
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
