import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

var Spinner = require('react-spinkit');
class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        if (!this.props.posts)
            return (<li className="text-center">
                <Spinner name="folding-cube" />
            </li>);
        return _.map(this.props.posts, (post) => {
            return (
                post.title ?
                    <li className="list-group-item" key={post.id}>
                        <Link to={"/post/" + post.id}>
                            <span className="pull-right">{post.categories}</span>
                            <h4>{post.title}</h4>
                        </Link>
                    </li> : ''
            )
        })
    }

    render() {

        return (<div>
            <div className="">
                <Link to="/post/new" className="btn btn-primary pull-right">
                    Add new Post
                </Link>
            </div>
            <h3>Posts</h3>
            <ul className="list-group">
                {this.renderPosts()}
            </ul>
            <div className="text-center">
                <Link to="/post/new" className="btn btn-primary">
                    Add new Post
                </Link>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {
    fetchPosts
})(PostsIndex);