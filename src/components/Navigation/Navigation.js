import React from 'react';
import classes from './Navigation.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const Navigation = props => {
  let navigationClasses = [classes.Navigation];

  if(props.open === true) {
    navigationClasses.push(classes.Open);
  }
  return (
    <div className={navigationClasses.join(' ')}>
      <nav>
        <ul>
          <NavigationItem link='/'>Home Page</NavigationItem>
          <NavigationItem link='/movies'>Movies</NavigationItem>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;