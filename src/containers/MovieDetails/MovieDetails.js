import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import classes from './MovieDetails.module.scss';
import noImage from '../../assets/img/no-image.jpg';

class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  imageSrc = () => {
    if(!this.props.selectedMovie.Poster || this.props.selectedMovie.Poster === 'N/A') {
      return noImage;
    } else {
      return this.props.selectedMovie.Poster;
    }
  }

  render() {
    let movie;
    if(this.props.selectedMovie) {
      movie = (
        <React.Fragment>
          <div className={classes.Wrapper}>
            <div className={classes.ImgContainer}>
              <img src={this.imageSrc()} alt="Poster" />
            </div>
            <div className={classes.Content}>
              <h3>IMDB rating (votes)</h3>
              <p>{this.props.selectedMovie.imdbRating} ({this.props.selectedMovie.imdbVotes})</p>
            </div>
          </div>
          <div className={classes.BodyContainer}>
            <div className={classes.Heading}>
              <h1>{this.props.selectedMovie.Title}</h1>
              <span>Type: {this.props.selectedMovie.Type}</span>
              <p>Release: {this.props.selectedMovie.Released}</p>
            </div>
            <div className={classes.Content}>
              <h3>Director</h3>
              <p>{this.props.selectedMovie.Director}</p>
            </div>
            <div className={classes.Content}>
              <h3>Actors</h3>
              <p>{this.props.selectedMovie.Actors}</p>
            </div>
            <div className={classes.Content}>
              <h3>Plot</h3>
              <p>{this.props.selectedMovie.Plot}</p>
            </div>
            <div className={classes.Content}>
              <h3>Genre</h3>
              <p>{this.props.selectedMovie.Genre}</p>
            </div>
            <div className={classes.Content}>
              <h3>Runtime</h3>
              <p>{this.props.selectedMovie.Runtime}</p>
            </div>
            <div className={classes.Content}>
              <h3>Country (language)</h3>
              <p>{this.props.selectedMovie.Country} ({this.props.selectedMovie.Language})</p>
            </div>
            {this.props.selectedMovie.Production ? (
              <div className={classes.Content}>
                <h3>Production</h3>
                <p>{this.props.selectedMovie.Production}</p>
              </div>
            ) : null}
            {this.props.selectedMovie.totalSeasons ? (
              <div className={classes.Content}>
                <h3>Total seasons</h3>
                <p>{this.props.selectedMovie.totalSeasons}</p>
              </div>
            ) : null}
            <div className={classes.Content}>
              <button onClick={() => this.props.history.goBack()}>Back</button>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      movie = <div>No movie selected!</div>
    }
    return (
      <div className={classes.MovieDetails}>
        {movie}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: (id) => dispatch(actions.fetchMovie(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);