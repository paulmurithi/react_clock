import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ( { component: Component, auth, ...rest } ) => (
    <Route
        { ...rest }
        render={ ( props ) => {
            if ( auth.isLoading ) {
                return <h1>loading.........</h1>;
            } else if ( !auth.isAuthenticated ) {
                return <Navigate to='/login' />;
            } else {
                return <Component { ...props } />;
            }
        } }
    />
);

const mapStateToProps = ( state ) => {
    return {
        auth: state.auth
    }
}

export default connect( mapStateToProps )( PrivateRoute );