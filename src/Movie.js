import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// component 를 구현하는 방법
//  1. import react
//  2. component class 구현
//  3. render() 구현
// class Movie extends Component{

//     // propTypes : Movie component 가 props로 전달받는 정보의 type/필수여부를 정의
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }


//     render(){
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie