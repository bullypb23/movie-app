import React from 'react';
import classes from './Navigation.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
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