import React, { Component } from 'react';
import './Movie.css';

// component 를 구현하는 방법
//  1. import react
//  2. component class 구현
//  3. render() 구현
class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster} alt="Movie Poster" />
        )
    }
}

export default Movie