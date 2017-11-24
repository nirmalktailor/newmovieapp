import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import ReactTooltip from 'react-tooltip'

class Dashboard extends Component {

    constructor(props) {
        super(props);

        const getLoginStatus = localStorage.getItem("loginStatus");
        if(getLoginStatus === "nothing" || getLoginStatus == "undefined") {
            this.props.history.push('/login');
        }

        this.state = {
            movies          : [],
            searchFilter    : '',
            initialMovies   : [],
            loading         : true
        };

        this.updateMovies = debounce(function (searchValue) {
            if (searchValue == '') {
                this.setState({movies: this.state.initialMovies})
            }
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=0ca81b60e0ccb82d9e38665f13b044' +
                    'f5&query=' + searchValue)
                .then((response) => {
                    this.setState({movies: response.data.results})
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 100);
    }

    componentDidMount() {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=0ca81b60e0ccb82d9e38665f13b04' +
                '4f5')
            .then((response) => {
                this.setState({movies: response.data.results, initialMovies: response.data.results, loading: false})
            })
            .catch((error) => {
                console.log(error);
            });
    }

    filterMovies = (event) => {
        this.setState({searchFilter: event.target.value});
        this.updateMovies(event.target.value);
    }

    getMovieDetail = (event) => {
        console.log(event.target);
        let getMovieId = event.target.value;
        localStorage.setItem("movieid", getMovieId);
        this
            .props
            .history
            .push({pathname: '/moviedetail', movieId: getMovieId})
    }

    render() {
        let content;
        if (this.state.loading) {
            content = <div>
                <img
                    src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"
                    height="200"
                    width="200"/>
            </div>;
        } else {
            content = <div className="container">
                <center>
                    <h2>Movie DB Application Dashboard<small>&nbsp;&nbsp;Welcome : {localStorage.getItem('username')}</small>
                    </h2>
                </center><br/>
                <div>
                    <label>Search Movies :
                    </label>
                    <input
                        type="text"
                        className="form-control moviesFilter"
                        onChange={this.filterMovies}
                        value={this.state.searchFilter}/>
                        <ReactTooltip />
                </div>

                 {
                            this
                            .state
                            .movies
                            .map((eachMovie) => <div className="card">
                                <img data-tip={eachMovie.original_title} className="img-fluid" alt="Movie Poster Not Found" src={"http://image.tmdb.org/t/p/w185/"+eachMovie.poster_path} />
                                  <div class="card-body">
                                    <button
                                            type="button"
                                            className="btn btn-success btn-xs buttonStyle"
                                            value={eachMovie.id}
                                            onClick={this.getMovieDetail}>Show Detail</button>
                                </div>
                            </div>
                )
                }

                
            </div>
        }
        return (
            <div>
                {content}
            </div>
        )
    }
}

// Specifies the default values for props:

Dashboard.defaultProps = {
    movies: [],
    initialMovies: []
};

export default Dashboard;
