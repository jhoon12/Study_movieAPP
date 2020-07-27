import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster }) {
  return (
    <div class="movies_move">
      <img src={poster} alt={title} title={"영화 이미지"}></img>
      <div class="movie_date">
        <h3 class="movie_title">{title}</h3>
        <h3 class="movie_year">{year}</h3>
        <p class="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
