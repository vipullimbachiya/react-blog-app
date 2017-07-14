import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostNew extends Component {

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.props.history.push('/');
            });
    }

    renderField(field) {
        const { meta : { touched, error } } = field;
        const className = `form-group control-group ${touched && error ? 'has-error' : ''}`;
        return (
            <div className={className}>
                <label className="control-label">{field.label}</label>
                <div className="controls">
                    <input className="form-control" type="text" {...field.input} />
                    <div className="help-block help-text">
                        {touched ? error : ''}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new Post</h3>
                <Field
                    name="title"
                    label = "Title"
                    component={this.renderField}
                />

                <Field
                    name="categories"
                    label = "Categories"
                    component={this.renderField}
                />

                <Field
                    name="content"
                    label="Content"
                    component={this.renderField}
                />

                <button className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-link">Cancel</Link>
            </form>
        );
    };
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a post title";
    }

    if (!values.categories) {
        errors.categories = "Enter a cateogry";
    }

    if (!values.content) {
        errors.content = "Enter content";
    }

    return errors;
}

export default reduxForm({
    form: 'PostNew',
    validate
})(
    connect(null, { createPost })(PostNew)
);