
import React, { Component } from 'react';
import { Fragment } from 'react';

export default class Signup extends Component {
    render () {
        const {title, body} = this.props.post;
        return (
            <Fragment>
                <div class="card mb-3" style="max-width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{body}</p>
                </div>
                </div>
            </Fragment>
        )
    }
}