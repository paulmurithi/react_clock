import React, { Component } from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import store from '../store/store';
import {connect } from 'react-redux';
import { getPosts, addPost } from '../actions/Posts';
import Post from '../components/Post/Post';

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.object.isRequired
    }

    constructor ( props ) {
        super( props );
        this.state = {
            title: '',
            body: '',
            errors:[]
        }
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }
    componentDidMount () {
        store.dispatch( getPosts() );
    }
   
    handleChange ( e ) {
        this.setState( {
            [ e.target.name ]: e.target.value,
        } );
    }
    handleSubmit ( e ) {
        e.preventDefault();
        const { title, body } = this.state;
        const post = ( { title, body } );
        this.props.addPost( post );
        this.setState( {
            title: '',
            body: ''
        }
        );
    }

    render () {
        const { title, body } = this.state;
        const {campaigns} = this.props;
        console.log("================campaign===========")
        console.log(campaigns)
        return (
            <Fragment>
                 <form className="form-horizontal" action="" method="post" encType="multipart/form-data" role="form" onSubmit={ this.handleSubmit } >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title:</label>
                        <input type="text"
                            className="form-control"
                            id="title" name="title"
                            aria-describedby="title"
                            onChange={ this.handleChange }
                            placeholder="Enter title"
                            value={ title }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">body:</label>
                        <textarea 
                            className="form-control"
                            onChange={ this.handleChange }
                            value={ body }
                            id="body"
                            name="body"
                        >
                        </textarea>
                    </div>
                    <input type="submit" value="save" className="btn btn-default" />
                </form>

                {campaigns?(
                    <div className="row">
                        { campaigns.map(
                            campaign => (
                                < div className="col-xs-12" key={campaign.id}>
                                    <h1>{campaign.title}</h1>
                                    <p>{campaign.body}</p>
                                </div>
                            )
                        ) }
                    </div>
                ):(<h1>No posts available.</h1>)}
            </Fragment>
        )
    }
}
const mapStateToProps = state => ( {
    campaigns: state.Posts.posts
} )

export default connect( mapStateToProps, { getPosts, addPost } )( Posts );