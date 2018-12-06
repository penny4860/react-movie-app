import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// Component class 에 state가 없고, props 만 있을 경우,
// function으로 바꾸고, props를 parameter로 전달받자.
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

export default Movie