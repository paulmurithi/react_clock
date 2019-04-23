import React, { Component } from 'react'
import FormatDate from './FormatDate';

export default class Clock extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount () {
        this.timmerId = setInterval( () => this.tick(), 1000 );
    }

    componentWillUnmount () {
        clearInterval( this.timmerId );
    }

    tick () {
        this.setState( {
            date: new Date()
        } );
    }

    render () {
        return (
            <div>
                <FormatDate date={ this.state.date } />
            </div>
        )
    }
}
