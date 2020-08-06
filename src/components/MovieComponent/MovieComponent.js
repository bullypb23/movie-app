import React from 'react';
import classes from './MovieComponent.module.scss';
import noImage from '../../assets/img/no-image.jpg';
import { Link } from 'react-router-dom';

const MovieComponent = props => {
  let imgSrc;

  if(!props.movie.Poster || props.movie.Poster === 'N/A') {
    imgSrc = noImage;
  } else {
    imgSrc = props.movie.Poster;
  }

  return (
    <div className={classes.MovieComponent}>
      <div className={classes.MoviePoster}>
        <Link to={'/movies/' + props.movie.imdbID}>
          <img src={imgSrc} alt="Poster"/>
        </Link>
      </div>
      <div className={classes.MovieBody}>
        <h3>{props.movie.Title}</h3>
        <span>Type: {props.movie.Type}</span>
        <p>Release year: {props.movie.Year}</p>
        <div>
          <Link to={'/movies/' + props.movie.imdbID}>Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieComponent;