import React from "react";
import axios from "axios";
import Movie from "./movie";
import PropTypes from "prop-types";
import "./movie.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
  };
  async componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? <div className="loade">
              <span className="loader_text">Loading...</span>
            </div>
          :<div className="movies">
            {movies.map((movie) => {
              return( 
              <Movie
                key={movie.id} 
                id={movie.id} 
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                ></Movie>
              );
            })}
          </div>
            }
      </section>
    );
  }
}
export default App;

