import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import classes from './SearchResults.module.scss';

class SearchResults extends Component {
  handleTypeChange = e => {
    this.props.typeChanged(e.target.value);
  }

  render() {
    return (
      <div className={classes.SearchResults}>
        <div className={classes.TypeSearch}>
          <h3>Filter results by type</h3>
          <select onChange={this.handleTypeChange}>
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
            <option value="game">Game</option>
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    typeChanged: (type) => dispatch(actions.handleTypeChanged(type)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);