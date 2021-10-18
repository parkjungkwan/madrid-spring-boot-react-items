import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { CourseRegister, OnlineProfile, Join, Login, SchoolStatus, Navigation } from 'components/index'
import { HomePage } from "pages/index";
import './App.css';

function App() {
  return (
    <>
  <Navigation/>
  <NavigationForJavaScript/>
    <Switch>
    <Route exact path='/' component= { HomePage }/>
    <Redirect from='/home' to= { '/' }/>
    <Route exact path='/course-register' component= { CourseRegister }/>
    <Route exact path='/online-profile' component= { OnlineProfile }/>
    <Route exact path='/login' component= { Login }/>
    <Route exact path='/join' component= { Join }/>
    <Route exact path='/school-status' component= { SchoolStatus }/>

    <Route exact path='/basic' component= { Basic }/>

    </Switch></>
  );
}

export default App;
