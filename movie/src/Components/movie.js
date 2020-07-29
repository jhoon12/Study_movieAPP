import React from "react";
import PropTypes from "prop-types";
import "./movie.css";
import {Link} from  "react-router-dom";
function Movie({ year, title, summary, poster, genres}) {
  return (
    <Link to={{
     pathname:'/movie-detail',
    state:{
      year,
      title,
      summary,
      poster,
      genres
    }}}>
    <div className="movies_move">
      <label  htmlFor/>
      <img src={poster} alt={title} title={"영화 이미지"}></img>
      <div className="movie_date">
        <h3 className="movie_title">{title}</h3>
        <h3 className="movie_year">{year}</h3>
        <ul className = "genres"></ul>
        {genres.map((genre,index) =>{
            return (<li className="genres_genres" key={index}> {genre}</li>);
        })}
        <p className="movie_summary">{summary.slice(0,140)}...</p> 
      </div>
    </div>
    </Link>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
