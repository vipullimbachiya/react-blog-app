import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import PostIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/post/new" component={PostNew} />
                    <Route path="/post/:id" component={PostShow} />
                    <Route exact path="/" component={PostIndex} />
                </Switch>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));