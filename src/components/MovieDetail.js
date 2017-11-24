import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

class MovieDetail extends Component {
  
  constructor(props){
      super(props);
      const getMovieId = localStorage.getItem('movieid');
      this.state = {
          movieDetail : [],
          movieId : getMovieId,
          movieCasts : []
      }    
  }

  componentDidMount() {

        const getMovieId  = this.state.movieId;
        axios.get('http://api.themoviedb.org/3/movie/'+getMovieId+'?api_key=0ca81b60e0ccb82d9e38665f13b044f5')
            .then((response) => {
                this.setState({ movieDetail: response.data });
            })
            .catch((error) => {
                console.log(error);
        });
        axios.get('http://api.themoviedb.org/3/movie/'+getMovieId+'/casts?api_key=0ca81b60e0ccb82d9e38665f13b044f5')
            .then((response) => {
                this.setState({ movieCasts: response.data.cast });
                console.log(response.data.cast);
            })
            .catch((error) => {
                console.log(error);
        });
  }

  render() {

    let test = {
      textDecoration : "none",
      color:"grey",
      textAlign : "center",
      padding : "4px"
    }
    return (
      <div>
        <div className="row col-md-12">
          <div className="col-md-3 moviePoster">
              <img alt="No Image Found" className="movieImage" src={"http://image.tmdb.org/t/p/w185/"+this.state.movieDetail.poster_path}  />
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="list-group">
                    <a href="Javascript::void(0)" className="list-group-item"><strong>Home Page</strong> : {this.state.movieDetail.homepage}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>Overview </strong> : {this.state.movieDetail.overview}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>IMBD ID </strong> : {this.state.movieDetail.imdb_id}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>Release Date</strong> : {this.state.movieDetail.release_date}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>Vote Count</strong> : {this.state.movieDetail.vote_count}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>budget</strong> : {this.state.movieDetail.budget}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>popularity</strong> : {this.state.movieDetail.popularity}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>runtime</strong> : {this.state.movieDetail.runtime}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>status</strong> : {this.state.movieDetail.status}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>title</strong> : {this.state.movieDetail.title}</a>
                    <a href="Javascript::void(0)" className="list-group-item"><strong>vote_average</strong> : {this.state.movieDetail.vote_average}</a>
                    </div>
              </div>
            </div>
          </div>
          <ReactTooltip />
          <div className="col-md-5">
                <div className="row">
                  <center>Actors In Movie</center>
                    {
                          this
                          .state
                          .movieCasts
                          .map((eachCast) => <div key = {eachCast.name} className="col-xs-6 col-md-3">
                            <a  href="Javascript::void(0)" className="thumbnail" style={test}>
                              <img 
                                  data-tip="hello" 
                                  src=
                                  {
                                      eachCast.profile_path ? "http://image.tmdb.org/t/p/w185/"+eachCast.profile_path : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                                  } 
                                  alt="No image Available."
                                />
                              <span>{eachCast.name}</span>
                            </a>
                          </div>
                      )
                    }
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
