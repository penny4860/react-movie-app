import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// Component class 구현방법
//  1. import react
//  2. component class 구현
//  3. render() 구현
class App extends Component {

  // Component lifecycle
  //  1. Render: componentWillMount() -> render() -> componentDidMount()
  //    * Component instance 생성할 때, 위 순서대로 함수가 실행
  //  2. Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  //    * Application 의 상태(props/stats)가 변경될 때

  state = {}

  // render() 실행 이후 5초후에 state 를 update
  // state가 update 되었으므로 다시 render() 가 실행된다.
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
        title={movie.title_english}
        poster={movie.large_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  // _getMovies를 비동기 함수로 구현
  //    1) 비동기함수는 이전 코드의 완료여부와 관계없이 수행 : API 받아오는 등의 작업에 적합
  //    2) await : async 함수 내부에 await 라인은 반드시 끝나야 다음 라인이 실행된다.
  _getMovies =  async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {

    //fetch() : 외부 API를 promise 객체를 리턴받는다. (비동기처리)
    //  then : fetch가 끝난 이후 내용을 구현
    //  catch : fetch가 제대로 안되었을 때의 예외처리를 구현
    //arrow function
    //  potato => potato.json()
    //  function(argument) {return argument.json()}
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  
  render() {
    const { movies } = this.state;

    // state가 비었으면 "Loading"
    // state가 있으면 함수를 실행
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
