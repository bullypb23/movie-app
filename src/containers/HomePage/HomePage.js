import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import classes from './HomePage.module.scss';

class HomePage extends Component {
  handleTitleChange = e => {
    this.props.onTitleChange(e.target.value);
  }

  handleYearChange = e => {
    this.props.onYearChange(e.target.value);
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.handlePageChange(1);
    this.props.searchMovies(this.props.title, this.props.year, 1);
    this.props.history.push('/movies');
  }

  render() {
    return (
      <div className={classes.HomePage}>
        <div className={classes.Heading}>
          <h1>Search movie database</h1>
        </div>
        <form onSubmit={this.handleSearch}>
          <div className={classes.FormControl}>
            <input type="text" placeholder="Movie title" onChange={this.handleTitleChange} value={this.props.title} />
          </div>
          <div className={classes.FormControl}>
            <input type="text" placeholder="Release year" onChange={this.handleYearChange} value={this.props.year} />
          </div>
          <div className={classes.FormButton}>
            <button type="submit" disabled={!this.props.title} >Search</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    year: state.year,
    page: state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (title) => dispatch(actions.handleTitleChange(title)),
    onYearChange: (year) => dispatch(actions.handleYearChange(year)),
    searchMovies: (title, year, page) => dispatch(actions.handleSearch(title, year, page)),
    handlePageChange: (page) => dispatch(actions.handlePageChange(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);