import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieComponent from '../../components/MovieComponent/MovieComponent';
import classes from './MoviesList.module.scss';
import Pagination from "react-js-pagination";
import * as actions from '../../store/actions';
import SearchResults from '../SearchResults/SearchResults';
import SortResults from '../SortResults/SortResults';
import Spinner from '../../components/Spinner/Spinner';

class MoviesList extends Component {
  
  handlePageChange = (pageNumber) => {
    this.props.handleSortingResults('');
    this.props.handlePageChange(pageNumber);
    this.props.handleSearchMovies(this.props.title, this.props.year, pageNumber);
  }

  render() {
    let moviesList;
    if(this.props.movies.data.length !== 0) {
      moviesList = this.props.movies.data
      .sort((movieA, movieB) => {
        if(this.props.sort === 'yearAsc') {
          return +movieA.Year.slice(0,4) - +movieB.Year.slice(0,4)
        } else if(this.props.sort === 'yearDesc') {
          return +movieB.Year.slice(0,4) - +movieA.Year.slice(0,4)
        } else if(this.props.sort === 'titleAsc') {
          let titleA = movieA.Title.toLowerCase();
          let titleB = movieB.Title.toLowerCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        } else if(this.props.sort === 'titleDesc') {
          let titleA = movieA.Title.toLowerCase();
          let titleB = movieB.Title.toLowerCase();
          if (titleA < titleB) return 1;
          if (titleA > titleB) return -1;
          return 0;
        } else {
          return movieA;
        }
      })
      .filter((movie) => {
        if(this.props.type === 'all') {
          return movie;
        }
        return movie.Type === this.props.type;
      })
      .map((movie, index) => {
        return <MovieComponent key={index} movie={movie} />
      })
    } else {
      moviesList = <div className={classes.NotFound}>Go to <Link to="/">Home Page</Link> and search for movie.</div>
    }
    return (
      <div className={classes.MoviesList}>
        {this.props.movies.data.length !== 0 ? (
          <div className={classes.SearchParams}>
            <h3>Title you searched: {this.props.title}</h3>
            {this.props.year ? <p>Year of release: {this.props.year}</p> : null}
          </div>
        ) : null}
        {this.props.movies.data.length !== 0 ? (
          <div className={classes.Sort}>
            <SearchResults />
            <SortResults />
          </div>
        ) : null}
        <div className={classes.MoviesContainer}>
          {moviesList}
          {this.props.loading ? <Spinner /> : null}
        </div>
        {this.props.movies.data.length !== 0 ? (
          <div className={classes.Pagination}>
            <Pagination
              activePage={this.props.page}
              itemsCountPerPage={10}
              totalItemsCount={+this.props.movies.totalResults}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
              prevPageText={"prev"}
              nextPageText={"next"}
            />
          </div>
        ) : null}
        {this.props.error ? <p className="error">{this.props.error}</p> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    title: state.title,
    year: state.year,
    page: state.page,
    error: state.error,
    type: state.searchType,
    sort: state.sortType,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchMovies: (title, year, page) => dispatch(actions.handleSearch(title, year, page)),
    handlePageChange: (pageNumber) => dispatch(actions.handlePageChange(pageNumber)),
    handleSortingResults: (sort) => dispatch(actions.handleSortingResults(sort))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);