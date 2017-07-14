import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/index';

var Spinner = require('react-spinkit');

class PostShow extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onDeleteClick() {
        if (window.confirm("Are you sure you wish to delete this post?")) {
            this.props.deletePost(this.props.match.params.id).then(() => {
                this.props.history.push("/");
            });
        }
    }

    render() {
        const { post } = this.props;
        if(!post) {
            return <div className="text-center">
                Loading...
                <Spinner name="folding-cube" />
            </div>
        }
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link pull-left">Back to Posts</Link>
                    </div>
                    <div className="col-md-6 text-right">
                        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
                            Delete Post
                        </button>
                    </div>
                </div>

                <h3 className="row clearfix">{post.title}</h3>
                <h6>Categories : {post.categories}</h6>
                <p>
                    {post.content}
                </p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);