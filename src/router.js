import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import TopicList from './Components/TopicList/TopicList';
import Post from './Components/Post/Post'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/topics' component={TopicList} />
        <Route path='/post/:id' component={Post} />
    </Switch>
)