import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './SortResults.module.scss';
import * as actions from '../../store/actions';
import { FaSortAmountDown, FaSortAmountDownAlt, FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';

class SortResults extends Component {
  handleSort = (sort) => {
    this.props.handleSortingResults(sort);
  }

  render() {
    return (
      <div className={classes.SortResults}>
        <h3>Sort by</h3>
        <div className={classes.ButtonContainer}>
          <button onClick={() => this.handleSort('yearAsc')}>
            Year 
            <FaSortAmountDownAlt />
          </button>
          <button onClick={() => this.handleSort('yearDesc')}>
            Year 
            <FaSortAmountDown />
          </button>
          <button onClick={() => this.handleSort('titleAsc')}>
            Title 
            <FaSortAlphaDown />
          </button>
          <button onClick={() => this.handleSort('titleDesc')}>
            Title 
            <FaSortAlphaDownAlt />
          </button>
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
    handleSortingResults: sort => dispatch(actions.handleSortingResults(sort))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortResults);