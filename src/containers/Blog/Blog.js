import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from '../../containers/Blog/Posts/Posts';
//import NewPost from '../../containers/Blog/NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

let AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts"
                            exact
                            activeClassName='my-active'
                            activeStyle={{
                                color : '#fa923f',
                                textDecoration : 'underline',}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname : "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
                    <Redirect from="/" to="/posts" />
            </div>
        );
    }
}

export default Blog;